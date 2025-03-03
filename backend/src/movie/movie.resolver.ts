import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { MovieService } from './movie.service'
import { Movie } from './movie.schema'
import { MovieDto } from './dto/movie.dto'
import { FindMovieInput, MovieInput, MoviesPageInput, UpdateMovieInput } from './input/movie.input'

/**
 * GraphQL resolvers
 * Handeling generation of schema.gql and API requests.
 */

@Resolver(() => Movie)
export class MovieResolver {
    constructor(private movieService: MovieService) {}

    @Mutation(() => MovieDto)
    async createMovie(@Args('input') input: MovieInput) {
        return this.movieService.create(input)
    }

    @Query(() => MovieDto)
    async findMovie(@Args('input') input: FindMovieInput) {
        return this.movieService.findOne(input)
    }

    @Mutation(() => MovieDto)
    async updateMovie(@Args('input') input: UpdateMovieInput) {
        return this.movieService.update(input)
    }

    @Mutation(() => Boolean)
    async deleteMovie(@Args('input') input: FindMovieInput): Promise<any> {
        await this.movieService.delete(input._id)
        return true
    }

    @Query(() => [MovieDto])
    async searchMoviesPage(@Args('input') input: MoviesPageInput) {
        return this.movieService.searchPage(input)
    }
}
