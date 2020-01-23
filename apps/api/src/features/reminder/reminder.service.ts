import { Injectable } from '@nestjs/common';
import { differenceInMilliseconds, endOfHour } from 'date-fns';
import { UserService } from '../auth/user.service';

@Injectable()
export class ReminderService {
  constructor(private readonly userService: UserService) {}

  runReminder(): void {
    const now = new Date();
    const startRemindingTimeSpan = differenceInMilliseconds(
      endOfHour(now),
      now
    );
    const remindTimeInterval = 60 * 60 * 1000;

    this.userService.notifyAllUsers();
    console.log('timeRemaining', startRemindingTimeSpan/1000/60/60);
    setTimeout(() => {
      this.userService.notifyAllUsers();
      setInterval(() => this.userService.notifyAllUsers(), remindTimeInterval);
    }, startRemindingTimeSpan);
  }
}
