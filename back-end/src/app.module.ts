import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleController } from './article/article.controller';
import { ArticleSchema } from './article/article.schema';
import { ArticleService } from './article/article.service';


//Main controller
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://user:cqMfc4FQmPA0Ew3R@cise-cluster.wmeyhzt.mongodb.net/?retryWrites=true&w=majority', {dbName: 'CISE-Cluster'}),
    MongooseModule.forFeature([{name: "Article", schema: ArticleSchema}])
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class AppModule {}
