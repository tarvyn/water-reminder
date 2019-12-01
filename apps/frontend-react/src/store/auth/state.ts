import { UserDto } from '@water-reminder/api-interfaces';

export interface State {
  readonly loggedIn: boolean;
  readonly loginInErrorMessage: string;
  readonly signUpErrorMessage: string;
  readonly user: UserDto;
}

export const initialState: State = {
  loggedIn: false,
  loginInErrorMessage: undefined,
  signUpErrorMessage: undefined,
  user: undefined
};
