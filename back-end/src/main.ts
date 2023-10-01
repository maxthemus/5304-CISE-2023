import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
//import * as dotenv from 'dotenv';

//dotenv.config(); // Load environment variables from .env file
const allowedOrigins = ["https://5304-frontend.vercel.app", "http://localhost:3000"];

async function bootstrap() {
  const port = 3001; 
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: (origin, callback) => {
      console.log(origin);
      if(!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Invalid origin"));
      }
    },
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
