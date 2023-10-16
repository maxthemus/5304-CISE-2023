import { IsNotEmpty, IsNumber, IsOptional, IsString, MAX, MaxLength, isString } from "class-validator";
import { Article } from "./article.schema";
import { Optional } from "@nestjs/common";

export class CreateArticleDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly name: string;    
    
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly author: string; 

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly publishDate: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly link: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly stage: string;

    @IsNumber()
    @IsOptional()
    readonly upRating: number;

    @IsNumber()
    @IsOptional()
    readonly downRating: number;

    @IsString()
    @IsOptional()
    readonly claim: string;

    constructor(partial: Partial<CreateArticleDto>) {
        this.upRating = partial.upRating || 0;
        this.downRating = partial.downRating || 0;
        this.claim = partial.claim || "";
    }
}