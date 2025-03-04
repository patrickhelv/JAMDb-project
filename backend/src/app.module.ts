import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { MovieModule } from './movie/movie.module'

@Module({
    imports: [
        MovieModule,
        MongooseModule.forRoot(
            process.env.MONGO_URI || 'mongodb://localhost:27017/DB', // Use Docker ENV or Fallback
        ),
        GraphQLModule.forRoot({
            installSubscriptionHandlers: true,
            autoSchemaFile: 'schema.gql',
            sortSchema: true,
            playground: true,
            debug: false,
            introspection: true,
        }),
    ],
})
export class AppModule {}
