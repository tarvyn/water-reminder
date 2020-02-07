import { RootState } from '@react-client/store/reducer';
import { State } from '@react-client/store/settings/state';
import { getNow } from '@water-reminder/utils';
import {
  getHours,
  getMinutes,
  startOfDay,
  addHours,
  addMinutes
} from 'date-fns';

export const timeToNumber = (time: Date): number => {
  return getHours(time) + getMinutes(time) / 60;
};

export const numberToTime = (timeNumber: number): Date => {
  const hours = Math.trunc(timeNumber);
  const minutes = (timeNumber - hours) * 60;

  return addHours(addMinutes(startOfDay(getNow()), minutes), hours);
};

export const selectSettingsState = <T>(selectState: (state: State) => T) => {
  return (state: RootState) => selectState(state.settings);
};

export const selectTimeSettings = selectSettingsState(
  (state: State): Record<'awakeTime' | 'sleepTime', Date> => ({
    awakeTime: numberToTime(state.awakeTime),
    sleepTime: numberToTime(state.sleepTime)
  })
);
