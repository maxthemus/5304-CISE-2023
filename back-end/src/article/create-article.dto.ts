import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

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
}