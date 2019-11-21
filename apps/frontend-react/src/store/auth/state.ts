import { UserDto } from '@water-reminder/api-interfaces';

export interface State {
  readonly loggedIn: boolean;
  readonly user: UserDto;
}

export const initialState: State = {
  loggedIn: false,
  user: undefined
};
