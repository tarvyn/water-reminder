import { Injectable } from '@nestjs/common';
import { UserDto } from '@water-reminder/api-interfaces';
import {
  addHours,
  differenceInMilliseconds,
  endOfHour,
  isAfter,
  isBefore,
  isEqual,
  startOfDay
} from 'date-fns';
import { HydrationService } from '../hydration/hydration.service';
import { UserService } from '../user/user.service';
import {
  calculateNextDrinkTime,
  calculateRemainingDrinks,
  calculateRemainingHours,
  MILLISECONDS_IN_HOUR,
  startOfHalfOfHour
} from './reminder.model';

export const REMIND_TIME_INTERVAL = MILLISECONDS_IN_HOUR / 2;
export const REMIND_MESSAGE = 'Time to drink water';

@Injectable()
export class ReminderService {
  constructor(
    private readonly userService: UserService,
    private readonly hydrationService: HydrationService
  ) {}

  runReminder(): void {
    const now = new Date();
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
      const now = startOfHalfOfHour(new Date());
      const dayStart = startOfDay(now);
      const nextDrinkTime = await this.calculateNextDrinkTime(user, now);
      const awakeTime = addHours(dayStart, user.awakeTime + user.utcOffset);

      if (isEqual(now, nextDrinkTime) || isEqual(now, awakeTime)) {
        await this.userService.notify(user, REMIND_MESSAGE);
      }
    }
  }

  async calculateNextDrinkTime(
    user: UserDto,
    now: Date = new Date()
  ): Promise<Date> {
    const dayStart = startOfDay(now);
    const drunkDailyDoses = await this.hydrationService.find(user._id, {
      from: dayStart.toISOString()
    });
    const drunkDailyWaterAmount = drunkDailyDoses.reduce(
      (sum, { volume }) => sum + volume,
      0
    );
    const awakeTime = addHours(dayStart, user.awakeTime + user.utcOffset);
    const lastDrunkDoseTime =
      drunkDailyDoses.length > 0 &&
      drunkDailyDoses[drunkDailyDoses.length - 1].time;
    const lastDrinkTime =
      lastDrunkDoseTime && isAfter(lastDrunkDoseTime, awakeTime)
        ? lastDrunkDoseTime
        : awakeTime;
    const remainingHours = calculateRemainingHours(user, now);
    const remainingDrinks = calculateRemainingDrinks(drunkDailyWaterAmount);
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
      return now;
    }

    return nextDrinkTime;
  }
}
