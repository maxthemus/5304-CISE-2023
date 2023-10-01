import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
//import * as dotenv from 'dotenv';

//dotenv.config(); // Load environment variables from .env file

async function bootstrap() {
  const port = 3001; 
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["*"],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port);
}
bootstrap();
