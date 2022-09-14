import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MongooseModule } from '@nestjs/mongoose'
import { MovieModule } from './movie/movie.module'

@Module({
    imports: [
        MovieModule,
        MongooseModule.forRoot(`mongodb://129.241.104.148:27017/DB`),
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
