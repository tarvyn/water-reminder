import { ExtractActionsType } from '@react-client/shared/types/redux';
import { NextDrinkTimeDto } from '@water-reminder/api-interfaces';

export enum ActionType {
  CalculateNextDrinkTimeSuccess = '[reminder] Calculate next drink time success'
}

export const reminderActions = {
  calculateNextDrinkTimeSuccess: ({ nextDrinkTime }: NextDrinkTimeDto) => {
    return {
      type: ActionType.CalculateNextDrinkTimeSuccess,
      payload: { nextDrinkTime }
    } as const;
  }
};

export type Actions = ExtractActionsType<typeof reminderActions>;
