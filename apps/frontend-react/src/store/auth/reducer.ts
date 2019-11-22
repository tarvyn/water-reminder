import { Actions, ActionType } from './actions';
import { initialState, State } from './state';

export function reducer(
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionType.Logout:
      return {
        ...state,
        loggedIn: false
      };
    case ActionType.LogoutSuccess:
      return {
        ...state,
        loggedIn: false
      };
    case ActionType.LogoutError:
      return {
        ...state,
        loggedIn: true
      };
    case ActionType.GetUserSuccess:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    case ActionType.GetUserError:
      return {
        ...state,
        loggedIn: false,
        user: undefined
      };
    default:
      return state;
  }
}
