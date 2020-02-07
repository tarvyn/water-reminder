import { Injectable } from '@nestjs/common';
import { getNow } from '@water-reminder/utils';
import {
  addDays,
  differenceInMilliseconds,
  endOfHour,
  isAfter,
  isBefore,
  isEqual
} from 'date-fns';
import { HydrationService } from '../hydration/hydration.service';
import { NotificationService } from '../notification/notification.service';
import {
  endOfHalfOfHour, getMillisecondsInHour,
  startOfHalfOfHour
} from '../shared/utils/date-fns';
import { UserService } from '../user/user.service';
import {
  calculateNextDrinkTime,
  calculateRemainingDrinks,
  calculateRemainingHours,
  getZonedToUtcTime,
} from './reminder.model';

export const REMIND_TIME_INTERVAL = getMillisecondsInHour() / 2;
export const REPEAT_REMIND_TIME_DURATION_DUE_TO_INACTIVITY =
  getMillisecondsInHour() * 4;
export const REMIND_MESSAGE = 'Time to drink water';

@Injectable()
export class ReminderService {
  constructor(
    private readonly userService: UserService,
    private readonly notificationService: NotificationService,
    private readonly hydrationService: HydrationService
  ) {}

  runReminder(): void {
    const now = getNow();
    const startRemindingTimeSpan = differenceInMilliseconds(
      endOfHour(now),
      now
    );

    setTimeout(() => {
      setInterval(() => this.notify(), REMIND_TIME_INTERVAL);
    }, startRemindingTimeSpan);
  }

  async notify(): Promise<void> {
    const users = await this.userService.find();

    for (const user of users) {
      const now = startOfHalfOfHour(getNow());
      const { nextDrinkTime, sleepTime, awakeTime, timeZone } = user;
      const zonedAwakeTime = getZonedToUtcTime(awakeTime, timeZone);
      const zonedSleepTime = getZonedToUtcTime(sleepTime, timeZone);

      if (isEqual(now, zonedSleepTime)) {
        await this.updateNextDrinkTime(user.id, addDays(zonedAwakeTime, 1));

        continue;
      }

      if (isEqual(now, zonedAwakeTime) || isEqual(now, nextDrinkTime)) {
        await this.notificationService.notify(user, REMIND_MESSAGE);
      }
    }
  }

  async calculateNextDrinkTime(userId: string): Promise<Date> {
    const now = getNow();
    const user = await this.userService.findById(userId);
    const { awakeTime, timeZone } = user;
    const dayStart = getZonedToUtcTime(0, timeZone);
    const drunkDailyDoses = await this.hydrationService.find(userId, {
      from: dayStart.toISOString()
    });
    const drunkDailyWaterAmount = drunkDailyDoses.reduce(
      (sum, { volume }) => sum + volume,
      0
    );
    const zonedAwakeTime = getZonedToUtcTime(awakeTime, timeZone);
    const lastDrunkDoseTime =
      drunkDailyDoses.length > 0 &&
      drunkDailyDoses[drunkDailyDoses.length - 1].time;
    const lastDrinkTime =
      lastDrunkDoseTime && isAfter(lastDrunkDoseTime, zonedAwakeTime)
        ? lastDrunkDoseTime
        : zonedAwakeTime;
    const remainingHours = calculateRemainingHours(user, now);
    const remainingDrinks = calculateRemainingDrinks(drunkDailyWaterAmount);

    if (isBefore(now, zonedAwakeTime)) {
      return zonedAwakeTime;
    }

    if (remainingDrinks === 0) {
      return addDays(zonedAwakeTime, 1);
    }

    const nextDrinkTime = calculateNextDrinkTime(
      lastDrinkTime,
      remainingHours,
      remainingDrinks
    );

    console.log('user:', user.email);
    console.log('drunkDailyDoses:', drunkDailyDoses);
    console.log('drunkDailyWaterAmount:', drunkDailyWaterAmount);
    console.log('lastDrinkTime:', lastDrinkTime);
    console.log('remainingHours:', remainingHours);
    console.log('remainingDrinks:', remainingDrinks);
    console.log('nextDrinkTime:', nextDrinkTime);

    if (isBefore(nextDrinkTime, now)) {
      return endOfHalfOfHour(now);
    }

    return nextDrinkTime;
  }

  async updateNextDrinkTime(
    userId: string,
    nextDrinkTime: Date
  ): Promise<void> {
    await this.userService.update(userId, { nextDrinkTime });
  }
}
