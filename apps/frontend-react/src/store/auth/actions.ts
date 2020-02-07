import { ExtractActionsType } from '@react-client/shared/types/redux';
import { SignInFormData } from '@react-client/ui/auth/sign-in/sign-in-form/sign-in-form';
import { SignUpFormData } from '@react-client/ui/auth/sign-up/sign-up-form/sign-up-form';
import { UserDto } from '@water-reminder/api-interfaces';

export enum ActionType {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login success',
  LoginError = '[Auth] Login error',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] Logout success',
  LogoutError = '[Auth] Logout error',
  SignUp = '[Auth] Sign up',
  SignUpSuccess = '[Auth] Sign up success',
  SignUpError = '[Auth] Sign up error',
  GetUser = '[Auth] Get user',
  GetUserSuccess = '[Auth] Get user success',
  GetUserError = '[Auth] Get user error',
}

export const authActions = {
  signUp: (signUpData: SignUpFormData) => {
    return {
      type: ActionType.SignUp,
      payload: { signUpData }
    } as const;
  },
  signUpSuccess: (user: UserDto) => {
    return {
      type: ActionType.SignUpSuccess,
      payload: { user }
    } as const;
  },
  signUpError: (errorMessage: string) => {
    return {
      type: ActionType.SignUpError,
      payload: { errorMessage }
    } as const;
  },
  login: (loginData: SignInFormData) => {
    return {
      type: ActionType.Login,
      payload: { loginData }
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

export type Actions = ExtractActionsType<typeof authActions>;
