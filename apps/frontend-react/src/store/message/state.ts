export interface State {
  readonly message: string;
  readonly isLoading: boolean;
}

export const initialState: State = {
  message: undefined,
  isLoading: true
};
