import { Actions, ActionType } from './actions';
import { initialState, State } from './state';

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.GetSettingsSuccess:
      const { awakeTime, sleepTime } = action.payload;

      return {
        ...state,
        awakeTime,
        sleepTime
      };
    case ActionType.SetAwakeTime:
    case ActionType.SetAwakeTimeError:
      return {
        ...state,
        awakeTime: action.payload.awakeTime
      };
    case ActionType.SetSleepTime:
    case ActionType.SetSleepTimeError:
      return {
        ...state,
        sleepTime: action.payload.sleepTime
      };
    default:
      return state;
  }
}
