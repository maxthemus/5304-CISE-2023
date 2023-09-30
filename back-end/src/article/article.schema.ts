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


}

export const ArticleSchema = SchemaFactory.createForClass(Article);