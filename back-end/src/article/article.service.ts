import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IArticle } from "./article.interface";
import { CreateArticleDto } from "./create-article.dto";
import { UpdateArticleDto } from "./update-article.dto";

@Injectable()
export class ArticleService {
    constructor(@InjectModel("Article") private articleModel: Model<IArticle>) {}

    async createArticle(CreateArticleDto: CreateArticleDto): Promise<IArticle> {
        const createdArticle = await new this.articleModel(CreateArticleDto);
        return createdArticle.save();
    }

    async updateArticle(articleId: string, updateArticleDto: UpdateArticleDto): Promise<IArticle> {
        const existingArticle = await this.articleModel.findOneAndUpdate({ _id: articleId}, updateArticleDto, { new: true });
        if(!existingArticle) {
            throw  new Error("NOT FOUND");
        }
        return existingArticle;
    }

    async getAllArticles(): Promise<IArticle[]> {
        const articleData = await this.articleModel.find();

        if(!articleData || articleData.length == 0) {
            throw new Error("Get all not found");
        }
        return articleData;
    }

    async getArticle(articleId: string): Promise<IArticle> {
        const existingArticle = await this.articleModel.findById(articleId).exec();

        if(!existingArticle) {
            throw new Error("Couldn't find single article");
        }
        return existingArticle;
    }

    async deleteArticle(articleId: string): Promise<IArticle> {
        const deletedArticle = await this.articleModel.findByIdAndDelete(articleId); 
        if (!deletedArticle) {
            throw new Error(`Student #${articleId} not found`);
        }
        return deletedArticle;
} 
}