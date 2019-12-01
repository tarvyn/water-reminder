import { DoseDto } from '@water-reminder/api-interfaces';

export interface State {
  readonly doses: Array<DoseDto>;
  readonly isLoading: boolean;
}

export const initialState: State = {
  doses: undefined,
  isLoading: true
};
