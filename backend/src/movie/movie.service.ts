import { Model, Types } from 'mongoose'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Movie } from './movie.schema'
import { FindMovieInput, MovieInput, MoviesPageInput, UpdateMovieInput } from './input/movie.input'

/**
 * Mongoose services
 * Fetching requested data from the database
 */

@Injectable()
export class MovieService {
    constructor(@InjectModel(Movie.name) private movieModel: Model<Movie>) {}

    async create(createMovie: MovieInput): Promise<Movie> {
        const createdMovie = new this.movieModel(createMovie)
        return createdMovie.save()
    }

    async findOne(movie: FindMovieInput): Promise<Movie> {
        return this.movieModel.findById(movie._id)
    }

    async update(updateMovie: UpdateMovieInput): Promise<Movie> {
        const movie = await this.movieModel.findOne(new Types.ObjectId(updateMovie._id))
        movie.title = updateMovie.title || movie.title
        movie.description = updateMovie.description || movie.description
        movie.published = updateMovie.published || movie.published
        movie.updatedAt = new Date()
        return movie.save()
    }

    async delete(_id: string): Promise<any> {
        return await this.movieModel.deleteOne({ _id: new Types.ObjectId(_id) })
    }

    async searchPage(moviesPageInput: MoviesPageInput): Promise<Movie[]> {
        let convertedFilterValue
        if (moviesPageInput.filterField == 'createdAt') {
            convertedFilterValue = new Date(moviesPageInput.filterValue, 1, 1)
        }
        return await this.movieModel
            .find({
                $or: [
                    {
                        title: {
                            $regex: moviesPageInput.searchQuery,
                            $options: 'i',
                        },
                    },
                    {
                        description: {
                            $regex: moviesPageInput.searchQuery,
                            $options: 'i',
                        },
                    },
                ],
            })
            .find({
                [moviesPageInput.filterField]: {
                    [moviesPageInput.filterCond]:
                        convertedFilterValue || moviesPageInput.filterValue,
                },
            })
            .sort({ [moviesPageInput.orderField]: moviesPageInput.orderValue })
            .limit(moviesPageInput.take)
            .skip(moviesPageInput.skip)
            .exec()
    }
}
