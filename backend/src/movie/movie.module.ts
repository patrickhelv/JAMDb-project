import { Module } from '@nestjs/common'
import { MovieResolver } from './movie.resolver'
import { MongooseModule } from '@nestjs/mongoose'
import { Movie, MovieSchema } from './movie.schema'
import { MovieService } from './movie.service'

/**
 * NEST config module for movie API
 */

@Module({
    imports: [MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
    providers: [MovieResolver, MovieService],
})
export class MovieModule {}
