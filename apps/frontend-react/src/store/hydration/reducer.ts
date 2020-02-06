import { Actions, ActionType } from '@react-client/store/hydration/actions';
import { isEqual } from 'date-fns';
import { initialState, State } from './state';

export function reducer(
  state: State = initialState,
  action: Actions
): State {
  switch (action.type) {
    case ActionType.GetDoses:
      return {
        ...state,
        isLoading: true
      };
    case ActionType.GetDosesSuccess:
      return {
        ...state,
        doses: action.payload.doses
      };
    case ActionType.CreateDose:
      return {
        ...state,
        doses: (state.doses || []).concat([{
          ...action.payload,
          userId: action.payload.userId,
          _id: Math.random().toString()
        }])
      };
    case ActionType.CreateDoseSuccess:
      return {
        ...state,
        doses: state.doses.map(dose => {
          const { time, _id } = action.payload.dose;

          if (isEqual(dose.time, new Date(time))) {
            return { ...dose, _id };
          }

          return dose;
        })
      };
    case ActionType.DeleteDose:
      return {
        ...state,
        doses: state.doses.filter(
          dose => dose._id !== action.payload.id
        )
      };
    default:
      return state;
  }
}
