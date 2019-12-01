import { Actions, ActionType } from '@react-client/store/reminder/actions';
import { initialState, State } from './state';

export function reducer(
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionType.GetDoses:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.GetDosesSuccess:
      return {
        ...state,
        doses: action.payload.doses
      };
    default:
      return state;
  }
}
