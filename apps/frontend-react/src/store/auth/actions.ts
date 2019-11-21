import { UserDto } from '@water-reminder/api-interfaces';
import { ActionCreator, Action } from 'redux';
import { Payload } from '../../shared/types/redux';

export const LOGIN = 'Login';
export const LOGIN_SUCCESS = 'Login success';
export const LOGIN_ERROR = 'Login error';

export const LOGOUT = 'Logout';
export const LOGOUT_SUCCESS = 'Logout success';
export const LOGOUT_ERROR = 'Logout error';

export const GET_USER = 'Get user';
export const GET_USER_SUCCESS = 'Get user success';
export const GET_USER_ERROR = 'Get user error';

export const login: ActionCreator<void> =
  () => ({ type: LOGIN });

export const loginSuccess: ActionCreator<Payload<{ readonly user: UserDto }>> =
  (user: UserDto) => ({
    type: LOGIN_SUCCESS,
    payload: { user }
  });

export const loginError: ActionCreator<Payload<{ readonly errorMessage: string }>> =
  (errorMessage: string) => ({
    type: LOGIN_ERROR,
    payload: { errorMessage }
  });

export const logout: ActionCreator<Action> =
  () => ({ type: LOGOUT });

export const logoutSuccess: ActionCreator<Payload<{ readonly user: UserDto }>> =
  (user: UserDto) => ({
    type: LOGOUT_SUCCESS,
    payload: { user }
  });

export const logoutError: ActionCreator<Payload<{ readonly errorMessage: string }>> =
  (errorMessage: string) => ({
    type: LOGOUT_ERROR,
    payload: { errorMessage }
  });

export const getUser: ActionCreator<Action> =
  () => ({ type: GET_USER });

export const getUserSuccess: ActionCreator<Payload<{ readonly user: UserDto }>> =
  (user: UserDto) => ({
    type: GET_USER_SUCCESS,
    payload: { user }
  });

export const getUserError: ActionCreator<Payload<{ readonly errorMessage: string }>> =
  (errorMessage: string) => ({
    type: GET_USER_ERROR,
    payload: { errorMessage }
  });
