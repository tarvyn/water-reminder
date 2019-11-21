import { GET_MESSAGE, GET_MESSAGE_SUCCESS } from './actions';
import { initialState, State } from './state';

export default function reducer(
  state: State = initialState,
  action: { readonly type: string; readonly payload: unknown }
): State {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        isLoading: true
      };
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        message: action.payload as string
      };
    default:
      return state;
  }
}
