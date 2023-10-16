import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Article {
    @Prop()
    name: string;

    @Prop() 
    author: string;

    @Prop()
    publishDate: string;

    @Prop()
    link: string;

    @Prop()
    stage: string; //can be "[moderation, analyze, done]"

    @Prop()
    upRating: number;

    @Prop()
    downRating: number;

    @Prop()
    claim: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);