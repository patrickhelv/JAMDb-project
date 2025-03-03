import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class MovieDto {
    @Field()
    readonly _id: string

    @Field()
    readonly title: string

    @Field((type) => Int)
    readonly published: number

    @Field()
    readonly description: string

    @Field()
    createdAt: Date

    @Field()
    updatedAt: Date
}
