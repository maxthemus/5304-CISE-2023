import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { CreateArticleDto } from './create-article.dto';
import { UpdateArticleDto } from './update-article.dto';
import { ArticleService } from "./article.service";
import { HttpAdapterHost } from '@nestjs/core';

@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}

    @Post()
    async createArticle(@Res() response, @Body() createArticleDto: CreateArticleDto) {
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

    @Put('/:id')
    async updateArticle(@Res() response, @Param('id') articleId: string,
        @Body() updateArticleDto: UpdateArticleDto) {
        try {
            const existingArticle = await this.articleService.updateArticle(articleId, updateArticleDto); return response.status(HttpStatus.OK).json({
                message: 'Student has been successfully updated',
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