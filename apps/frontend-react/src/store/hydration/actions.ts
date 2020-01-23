import { ExtractActionsType } from '@react-client/shared/types/redux';
import { DoseViewModel } from '@react-client/shared/types/hydration';
import { DoseDto } from '@water-reminder/api-interfaces';

export enum ActionType {
  GetDoses = '[hydration] get doses',
  GetDosesSuccess = '[hydration] get doses success',
  GetDosesError = '[hydration] get doses error',
  CreateDose = '[hydration] create dose',
  CreateDoseSuccess = '[hydration] create dose success',
  CreateDoseError = '[hydration] create dose error',
  DeleteDose = '[hydration] delete dose',
  DeleteDoseSuccess = '[hydration] delete dose success',
  DeleteDoseError = '[hydration] delete dose error',
}

export const hydrationActions = {
  getDoses: () => {
    return {
      type: ActionType.GetDoses,
    } as const;
  },
  getDosesSuccess: (doses: Array<DoseViewModel>) => {
    return {
      type: ActionType.GetDosesSuccess,
      payload: { doses }
    } as const;
  },
  getDosesError: (errorMessage: string) => {
    return {
      type: ActionType.GetDosesError,
      payload: { errorMessage }
    } as const;
  },
  createDose: (payload: Pick<DoseViewModel, 'volume' | 'time'>) => {
    return {
      type: ActionType.CreateDose,
      payload
    } as const;
  },
  createDoseSuccess: (dose: DoseDto) => {
    return {
      type: ActionType.CreateDoseSuccess,
      payload: { dose }
    } as const;
  },
  createDoseError: (errorMessage: string) => {
    return {
      type: ActionType.CreateDoseError,
      payload: { errorMessage }
    } as const;
  },
  deleteDose: (id: string) => {
    return {
      type: ActionType.DeleteDose,
      payload: { id }
    } as const;
  },
  deleteDoseSuccess: (id: string) => {
    return {
      type: ActionType.DeleteDoseSuccess,
      payload: { id }
    } as const;
  },
  deleteDoseError: (errorMessage: string) => {
    return {
      type: ActionType.DeleteDoseError,
      payload: { errorMessage }
    } as const;
  },
};

export type Actions = ExtractActionsType<typeof hydrationActions>;
