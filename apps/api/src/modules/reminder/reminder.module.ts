import { Module } from '@nestjs/common';
import { HydrationModule } from '../hydration/hydration.module';
import { NotificationModule } from '../notification/notification.module';
import { UserModule } from '../user/user.module';
import { ReminderController } from './reminder-controller';
import { ReminderService } from './reminder.service';

@Module({
  imports: [UserModule, HydrationModule, NotificationModule],
  providers: [ReminderService],
  controllers: [ReminderController]
})
export class ReminderModule {}
