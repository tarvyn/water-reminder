export interface State {
  readonly awakeTime: number;
  readonly sleepTime: number;
}

export const initialState: State = {
  awakeTime: undefined,
  sleepTime: undefined
};
