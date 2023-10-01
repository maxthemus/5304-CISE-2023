import { IsNotEmpty, IsNumber, IsString, MAX, MaxLength, isString } from "class-validator";

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
}