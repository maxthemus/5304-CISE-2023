import { Document } from "mongoose";

export interface IArticle extends Document {
    readonly name: string;
    readonly author: string;
    readonly publishDate: string;
    readonly link : string;
    readonly stage: string;
    readonly upRating: number;
    readonly downRating: number;
    readonly claim: string;
}