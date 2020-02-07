import { ExtractActionsType } from '@react-client/shared/types/redux';
import { DoseViewModel } from '@react-client/shared/types/hydration';
import { DoseDto } from '@water-reminder/api-interfaces';

export enum ActionType {
  GetDoses = '[Hydration] get doses',
  GetDosesSuccess = '[Hydration] get doses success',
  GetDosesError = '[Hydration] get doses error',
  CreateDose = '[Hydration] create dose',
  CreateDoseSuccess = '[Hydration] create dose success',
  CreateDoseError = '[Hydration] create dose error',
  DeleteDose = '[Hydration] delete dose',
  DeleteDoseSuccess = '[Hydration] delete dose success',
  DeleteDoseError = '[Hydration] delete dose error',
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
