import { IsBoolean, IsNotEmpty, IsString, MaxLength } from "class-validator";

export class updateArticleRatingDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly id: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly upRating: boolean;
}