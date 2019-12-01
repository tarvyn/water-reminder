import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoseSchemaModel } from './dose.schema';
import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';

@Module({
  imports: [MongooseModule.forFeature([DoseSchemaModel])],
  controllers: [ReminderController],
  providers: [ReminderService],
})
export class ReminderModule {}
