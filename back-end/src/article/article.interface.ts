import { Document } from "mongoose";

export interface IArticle extends Document {
    readonly name: string;
    readonly author: string;
    readonly publishDate: string;
    readonly link : string;
    readonly stage: string;
}