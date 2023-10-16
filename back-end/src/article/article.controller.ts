import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateArticleDto } from './create-article.dto';
import { UpdateArticleDto } from './update-article.dto';
import { ArticleService } from "./article.service";
import { HttpAdapterHost } from '@nestjs/core';
import { response } from 'express';
import { updateArticleStageDto } from './update-article-stage.dto';
import { updateArticleRatingDto } from './update-article-rating.dto';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async createArticle(@Res() response, @Body() createArticleDto: Partial<CreateArticleDto>) {
        try {
            const newArticle = await this.articleService.createArticle(createArticleDto);

            return response.status(HttpStatus.CREATED).json({
                message: "article has been created successfully",
                newArticle
            });
        } catch(err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400, 
                message: "Error creating article",
                error: "Bad request"
            });
        }
    }

    @Post("/analyze")
    async analyzeArticle(@Res() response, @Body() updateObj: updateArticleStageDto) {
        try {
                const getArticleInfo = await this.articleService.getArticle(updateObj.id);
                const updatedArticleDTO:UpdateArticleDto = {
                    stage: (updateObj.accepted ? "done" : "failed"),
                }                

                const updatedArticle = await this.articleService.updateArticle(updateObj.id, updatedArticleDTO);
                return response.status(HttpStatus.OK).json({
                    message: "Article has been analyze",
                    updatedArticle
                });
        } catch(err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                error: "Server error"
            });
        }
    }


    @Post("/moderation")
    async moderateArticle(@Res() response, @Body() updateObj: updateArticleStageDto) {
        try {
                const getArticleInfo = await this.articleService.getArticle(updateObj.id);
                const updatedArticleDTO:UpdateArticleDto = {
                    stage: (updateObj.accepted ? "analyze" : "failed"),
                }                

                const updatedArticle = await this.articleService.updateArticle(updateObj.id, updatedArticleDTO);
                return response.status(HttpStatus.OK).json({
                    message: "Article has been moderated",
                    updatedArticle
                });
        } catch(err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                error: "Server error"
            });
        }
    }

    @Post("/rate")
    async rateArticle(@Res() response, @Body() updateObj: updateArticleRatingDto) {
        try {
            const getArticleInfo = await this.articleService.getArticle(updateObj.id);
            const updateArticleDTO:UpdateArticleDto = {
                upRating:(updateObj.upRating ? getArticleInfo.upRating + 1 : getArticleInfo.upRating),
                downRating:(!updateObj.upRating ? getArticleInfo.downRating + 1: getArticleInfo.downRating)
            };

            const updatedArticle = await this.articleService.updateArticle(updateObj.id, updateArticleDTO);
            return response.status(HttpStatus.OK).json({
                message: "Article has been rated",
                updatedArticle
            });
        } catch(err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                error: "Server error, unable to update article rating"
            });
        }
    }


    @Put('/:id')
    async updateArticle(@Res() response, @Param('id') articleId: string,
        @Body() updateArticleDto: UpdateArticleDto) {
        try {
            const existingArticle = await this.articleService.updateArticle(articleId, updateArticleDto); 
            return response.status(HttpStatus.OK).json({
                message: 'Article has been successfully updated',
                existingArticle,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                error: err.response
            });
        }
    }

    @Get()
    async getArticles(@Res() response) {
        try {
            const articleData = await this.articleService.getAllArticles();
            return response.status(HttpStatus.OK).json({
                message: 'All students data found successfully', articleData,
            });
        } catch (err) {
            console.log(err);
            return response.status(HttpStatus.BAD_REQUEST).json({
                err: err.message
            });
        }
    }

    @Get('/:id')
    async getArticle(@Res() response, @Param('id') articleId: string) {
        console.log(articleId);
        try {
            const existingArticle = await this.articleService.getArticle(articleId); 
                return response.status(HttpStatus.OK).json({
                    message: 'Student found successfully', 
                    existingArticle,
                });
        } catch (err) {
            console.log(err);
            return response.status(HttpStatus.BAD_REQUEST).json({
                err: err.message
            });
        }
    }

    @Delete('/:id')
    async deleteArticle(@Res() response, @Param('id') articleId: string) {
        try {
            const deletedArticle = await this.articleService.deleteArticle(articleId); return response.status(HttpStatus.OK).json({
                message: 'Student deleted successfully',
                deletedArticle,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                err:err.response
            });
        }
    }

    @Get("/stage/:stage")
    async getArticlesOfStage(@Res() response, @Param("stage") stage: string) {
        //First we check to see if the stage is a vaid stage
        if(stage == "moderation" || stage == "analyze" || stage == "done") {
            const articleData = await this.articleService.getAllArticles();

            const outputArticles = articleData.filter((article) => {
                return (article.stage === stage);
            });

            return response.status(HttpStatus.OK).json({
                message: "Valid request",
                outputArticles
            });
        } else {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400, 
                message: "Error getting article type article",
                error: "Bad request"
            });     
        }
    }


}