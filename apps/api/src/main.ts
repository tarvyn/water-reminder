import { AppModule } from './features/app.module';
import { environment } from '@api/environments/environment';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { ReminderService } from './features/reminder/reminder.service';

async function bootstrap(): Promise<void> {
  const globalPrefix = 'api';
  const port = process.env.PORT || environment.apiPort;
  const app = await NestFactory.create(AppModule, { cors: true });
  const reminderService = app.get(ReminderService);

  reminderService.runReminder();
  app.use(cookieParser());
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
}

bootstrap();
