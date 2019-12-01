import { InferValueTypes } from '@react-client/shared/types/utilities';
import { DoseDto, DoseVolume } from '@water-reminder/api-interfaces';

export enum ActionType {
  GetDoses = '[reminder] get doses',
  GetDosesSuccess = '[reminder] get doses success',
  GetDosesError = '[reminder] get doses error',
  CreateDose = '[reminder] create dose',
  CreateDoseSuccess = '[reminder] create dose success',
  CreateDoseError = '[reminder] create dose error',
  DeleteDose = '[reminder] delete dose',
  DeleteDoseSuccess = '[reminder] delete dose success',
  DeleteDoseError = '[reminder] delete dose error',
}

export const reminderActions = {
  getDoses: () => {
    return {
      type: ActionType.GetDoses,
    } as const;
  },
  getDosesSuccess: (doses: Array<DoseDto>) => {
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
  createDose: () => {
    return {
      type: ActionType.CreateDose,
      payload: { volume: DoseVolume.cup }
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

export type Actions = ReturnType<InferValueTypes<typeof reminderActions>>;
