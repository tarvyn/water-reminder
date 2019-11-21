import { GET_USER_ERROR, GET_USER_SUCCESS, LOGOUT, LOGOUT_ERROR, LOGOUT_SUCCESS } from './actions';
import { initialState, State } from './state';

export default function reducer(
  state: State = initialState,
  action: { readonly type: string; readonly payload: unknown }
): State {
  switch (action.type) {
    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false
      };
    case LOGOUT_ERROR:
      return {
        ...state,
        loggedIn: true
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        // TODO: fix
        user: (action.payload as any).user
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loggedIn: false,
        user: undefined
      };
    default:
      return state;
  }
}
