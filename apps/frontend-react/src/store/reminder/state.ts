export interface State {
  readonly nextDrinkTime: Date;
}

export const initialState: State = {
  nextDrinkTime: undefined
};
