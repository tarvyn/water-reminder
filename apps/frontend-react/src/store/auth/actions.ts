import { InferValueTypes } from '@react-client/shared/types/utilities';
import { UserDto } from '@water-reminder/api-interfaces';

export enum ActionType {
  Login = '[auth] Login',
  LoginSuccess = '[auth] Login success',
  LoginError = '[auth] Login error',
  Logout = '[auth] Logout',
  LogoutSuccess = '[auth] Logout success',
  LogoutError = '[auth] Logout error',
  GetUser = '[auth] Get user',
  GetUserSuccess = '[auth] Get user success',
  GetUserError = '[auth] Get user error',
}

export const authActions = {
  login: () => {
    return {
      type: ActionType.Login,
    } as const;
  },
  loginSuccess: (user: UserDto) => {
    return {
      type: ActionType.LoginSuccess,
      payload: { user }
    } as const;
  },
  loginError: (errorMessage: string) => {
    return {
      type: ActionType.LoginError,
      payload: { errorMessage }
    } as const;
  },
  logout: () => {
    return {
      type: ActionType.Logout,
    } as const;
  },
  logoutSuccess: () => {
    return {
      type: ActionType.LogoutSuccess,
    } as const;
  },
  logoutError: (errorMessage: string) => {
    return {
      type: ActionType.LogoutError,
      payload: { errorMessage }
    } as const;
  },
  getUser: () => {
    return {
      type: ActionType.GetUser,
    } as const;
  },
  getUserSuccess: (user: UserDto) => {
    return {
      type: ActionType.GetUserSuccess,
      payload: { user }
    } as const;
  },
  getUserError: (errorMessage: string) => {
    return {
      type: ActionType.GetUserError,
      payload: { errorMessage }
    } as const;
  },
};

export type Actions = ReturnType<InferValueTypes<typeof authActions>>;
