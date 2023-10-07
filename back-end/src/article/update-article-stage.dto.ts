import { IsBoolean, IsNotEmpty, IsNumber, IsString, MAX, MaxLength, isString } from "class-validator";

export class updateArticleStageDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    readonly id: string;    
    
    @IsBoolean()
    @IsNotEmpty()
    readonly accepted: boolean; 
}