import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ReminderService } from './reminder.service';

@Module({
  imports: [AuthModule],
  providers: [ReminderService]
})
export class ReminderModule {}
