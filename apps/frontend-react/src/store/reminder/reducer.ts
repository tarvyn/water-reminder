import { Actions, ActionType } from './actions';
import { initialState, State } from './state';

export function reducer(state: State = initialState, action: Actions): State {
  switch (action.type) {
    case ActionType.CalculateNextDrinkTimeSuccess:
      return {
        ...state,
        nextDrinkTime: new Date(action.payload.nextDrinkTime)
      };
    default:
      return state;
  }
}
