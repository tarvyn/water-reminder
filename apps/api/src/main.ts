import { AppModule } from '@api/app/app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { environment } from '@api/environments/environment';

async function bootstrap(): Promise<void> {
  const globalPrefix = 'api';
  const port = process.env.PORT || environment.apiPort;
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
}

bootstrap();
