import { AppModule } from './modules/app.module';
import { environment } from '@api/environments/environment';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ReminderService } from './modules/reminder/reminder.service';

async function bootstrap(): Promise<void> {
  const globalPrefix = 'api';
  const port = process.env.apiPort || environment.apiPort;
  const app = await NestFactory.create(AppModule, { cors: true });
  const reminderService = app.get(ReminderService);

  if (process.env.RUN_REMINDER || !environment.production) {
    reminderService.runReminder();
  }

  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
}

bootstrap();
