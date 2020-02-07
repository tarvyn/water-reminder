import { addHours, addMilliseconds, differenceInHours, endOfHour, startOfHour, differenceInMinutes, addMinutes } from 'date-fns';

export function getMillisecondsInHour(): number {
  return 1000 * 60 * 60;
}

export function startOfHalfOfHour(time: Date): Date {
  return differenceInMinutes(endOfHour(time), time) > 30
    ? startOfHour(time)
    : addMinutes(startOfHour(time), 30);
}

export function endOfHalfOfHour(time: Date): Date {
  return addMilliseconds(startOfHalfOfHour(time), getMillisecondsInHour() / 2);
}
