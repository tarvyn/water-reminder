import { ExtractActionsType } from '@react-client/shared/types/redux';
import { State } from '@react-client/store/settings/state';

export enum ActionType {
  GetSettingsSuccess = '[Settings] Get settings success',
  SetAwakeTime = '[Settings] Set awake time',
  SetAwakeTimeSuccess = '[Settings] Set awake time success',
  SetAwakeTimeError = '[Settings] Set awake time error',
  SetSleepTime = '[Settings] Set sleep time',
  SetSleepTimeSuccess = '[Settings] Set sleep time success',
  SetSleepTimeError = '[Settings] Set sleep time error'
}

export const settingsActions = {
  getSettingsSuccess: (
    timeSettings: Pick<State, 'awakeTime' | 'sleepTime'>
  ) => {
    return {
      type: ActionType.GetSettingsSuccess,
      payload: timeSettings
    } as const;
  },
  setAwakeTime: (awakeTime: number) => {
    return {
      type: ActionType.SetAwakeTime,
      payload: { awakeTime }
    } as const;
  },
  setAwakeTimeSuccess: () => {
    return {
      type: ActionType.SetAwakeTimeSuccess,
    } as const;
  },
  setAwakeTimeError: (awakeTime: number) => {
    return {
      type: ActionType.SetAwakeTimeError,
      payload: { awakeTime }
    } as const;
  },
  setSleepTime: (sleepTime: number) => {
    return {
      type: ActionType.SetSleepTime,
      payload: { sleepTime }
    } as const;
  },
  setSleepTimeSuccess: () => {
    return {
      type: ActionType.SetSleepTimeSuccess,
    } as const;
  },
  setSleepTimeError: (sleepTime: number) => {
    return {
      type: ActionType.SetSleepTimeError,
      payload: { sleepTime }
    } as const;
  },
};

export type Actions = ExtractActionsType<typeof settingsActions>;
