import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

/**
 * Mongoose schema
 */

export type MovieDocument = Movie & Document

@Schema()
export class Movie {
    @Prop()
    title: string

    @Prop()
    published: number

    @Prop()
    description: string

    @Prop({ required: false, default: () => new Date() })
    createdAt: Date

    @Prop({ required: false, default: () => new Date() })
    updatedAt: Date
}

export const MovieSchema = SchemaFactory.createForClass(Movie)
