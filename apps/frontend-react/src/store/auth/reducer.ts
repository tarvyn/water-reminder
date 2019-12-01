import { Actions, ActionType } from './actions';
import { initialState, State } from './state';

export function reducer(
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionType.SignUp:
      return {
        ...state,
        signUpErrorMessage: undefined
      };
    case ActionType.SignUpSuccess:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    case ActionType.SignUpError:
      return {
        ...state,
        signUpErrorMessage: action.payload.errorMessage
      };
    case ActionType.Login:
      return {
        ...state,
        loginInErrorMessage: undefined
      };
    case ActionType.LoginSuccess:
      return {
        ...state,
        loggedIn: true,
        user: action.payload.user
      };
    case ActionType.LoginError:
      return {
        ...state,
        loggedIn: false,
        loginInErrorMessage: action.payload.errorMessage
      };
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
