import { Module } from '@nestjs/common';
import { HydrationModule } from '../hydration/hydration.module';
import { UserModule } from '../user/user.module';
import { ReminderService } from './reminder.service';

@Module({
  imports: [UserModule, HydrationModule],
  providers: [ReminderService]
})
export class ReminderModule {}
