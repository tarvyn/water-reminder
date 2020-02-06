import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NotificationController } from './notification.controller';
import { NotificationSchemaModel } from './notification.schema';
import { NotificationService } from './notification.service';

@Module({
  imports: [MongooseModule.forFeature([NotificationSchemaModel])],
  controllers: [NotificationController],
  providers: [NotificationService],
  exports: [NotificationService]
})
export class NotificationModule {}
