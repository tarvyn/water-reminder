import { DoseViewModel } from '@react-client/shared/types/reminder';

export interface State {
  readonly doses: Array<DoseViewModel>;
  readonly isLoading: boolean;
}

export const initialState: State = {
  doses: undefined,
  isLoading: true
};
