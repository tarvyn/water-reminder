import { DoseVolume, UserDto } from '@water-reminder/api-interfaces';
import { getNow, getTimeZone } from '@water-reminder/utils';
import {
  addMilliseconds,
  addMinutes,
  differenceInMilliseconds,
  getHours,
  getMinutes,
  startOfDay
} from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import {
  getMillisecondsInHour,
  startOfHalfOfHour
} from '../shared/utils/date-fns';

// TODO: remove constant and store this data for each user
const DAILY_TARGET = 2000;

export function getZonedToUtcTime(hours: number, timeZone: string): Date {
  return zonedTimeToUtc(addMinutes(startOfDay(getNow()), hours * 60), timeZone);
}

export function getUtcToZonedTime(date: Date, timeZone: string): Date {
  return zonedTimeToUtc(
    utcToZonedTime(date, timeZone),
    getTimeZone()
  );
}

export function calculateRemainingHours(
  user: UserDto,
  now: Date = getNow()
): number {
  const utcToZonedNow = zonedTimeToUtc(
    utcToZonedTime(now, user.timeZone),
    getTimeZone()
  );

  return (
    user.sleepTime - getHours(utcToZonedNow) - getMinutes(utcToZonedNow) / 60
  );
}

export function calculateRemainingDrinks(drunkWaterAmount: number): number {
  const remainingWaterAmount = Math.max(0, DAILY_TARGET - drunkWaterAmount);

  return Math.round(remainingWaterAmount / DoseVolume.cup);
}

export function calculateNextDrinkTime(
  lastDrinkTime: Date,
  remainingHours: number,
  remainingDrinks: number
): Date {
  const hoursPerDrink =
    remainingDrinks > 0 ? Math.max(1, remainingHours / remainingDrinks) : 0;
  const roundedHoursPerDrink = Math.max(1, Math.ceil(hoursPerDrink * 2) / 2);
  const halfOfHourGap =
    differenceInMilliseconds(lastDrinkTime, startOfHalfOfHour(lastDrinkTime)) /
    getMillisecondsInHour();
  const closestDrinkTimeSpan = roundedHoursPerDrink - halfOfHourGap;
  const nextDrinkTimeSpan =
    closestDrinkTimeSpan >= 1
      ? closestDrinkTimeSpan
      : closestDrinkTimeSpan + 0.5;

  return addMilliseconds(
    lastDrinkTime,
    nextDrinkTimeSpan * getMillisecondsInHour()
  );
}
