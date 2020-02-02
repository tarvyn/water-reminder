import { DoseVolume, UserDto } from '@water-reminder/api-interfaces';
import {
  addHours,
  addMilliseconds,
  differenceInHours,
  differenceInMilliseconds,
  endOfHour,
  getHours,
  startOfHour
} from 'date-fns';

export const MILLISECONDS_IN_HOUR = 1000 * 60 * 60;
// TODO: remove constant and store this data for each user
const DAILY_TARGET = 2000;

export function calculateRemainingHours(
  user: UserDto,
  now: Date = new Date()
): number {
  return user.sleepTime + user.utcOffset - getHours(now);
}

export function calculateRemainingDrinks(drunkWaterAmount: number): number {
  const remainingWaterAmount = DAILY_TARGET - drunkWaterAmount;

  return Math.round(remainingWaterAmount / DoseVolume.cup);
}

export function calculateNextDrinkTime(
  lastDrinkTime: Date,
  remainingHours: number,
  remainingDrinks: number
): Date {
  const hoursPerDrink = Math.max(1, remainingHours / remainingDrinks);
  const roundedHoursPerDrink = Math.max(1, Math.ceil(hoursPerDrink * 2) / 2);
  const halfOfHourGap =
    differenceInMilliseconds(lastDrinkTime, startOfHalfOfHour(lastDrinkTime)) /
    MILLISECONDS_IN_HOUR;
  const closestDrinkTimeSpan = roundedHoursPerDrink - halfOfHourGap;
  const nextDrinkTimeSpan =
    closestDrinkTimeSpan >= 1
      ? closestDrinkTimeSpan
      : closestDrinkTimeSpan + 0.5;

  return addMilliseconds(
    lastDrinkTime,
    nextDrinkTimeSpan * MILLISECONDS_IN_HOUR
  );
}

export function startOfHalfOfHour(time: Date): Date {
  return differenceInHours(endOfHour(time), time) > 0.5
    ? startOfHour(time)
    : addHours(startOfHour(time), 0.5);
}
