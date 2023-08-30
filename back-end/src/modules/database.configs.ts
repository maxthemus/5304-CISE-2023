import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forRoot('mongodb+srv://user:cqMfc4FQmPA0Ew3R@cise-cluster.wmeyhzt.mongodb.net/?retryWrites=true&w=majority')]
})
export class AppModule {}