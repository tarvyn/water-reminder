import { reminderApiConnector } from '@react-client/api-connectors/reminder.api-connector';
import { exposeOfTypeOperator } from '@react-client/shared/rxjs-operators/expose-of-type-operator';
import { Actions, ActionType, reminderActions } from '@react-client/store/reminder/actions';
import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

const ofType = exposeOfTypeOperator<Actions>();

export const getDosesEpic: Epic<Actions> = action$ => action$.pipe(
  ofType(ActionType.GetDoses),
  switchMap(() => reminderApiConnector.getDoses().pipe(
    map(doses => reminderActions.getDosesSuccess(
      doses.map(dose => ({
        ...dose,
        time: new Date(dose.time)
      }))
    )),
    catchError(error => of(reminderActions.getDosesError(error.toString())))
  ))
);

export const createDoseEpic: Epic<Actions> = action$ => action$.pipe(
  ofType(ActionType.CreateDose),
  mergeMap(({ payload: { time, volume } }) => reminderApiConnector
    .createDose({ time: time.toISOString(), volume }).pipe(
      map(dose => reminderActions.createDoseSuccess(dose)),
      catchError(error => of(reminderActions.createDoseError(error.toString())))
    ))
);

export const deleteDoseEpic: Epic<Actions> = action$ => action$.pipe(
  ofType(ActionType.DeleteDose),
  mergeMap(({ payload: { id } }) => reminderApiConnector.deleteDose(id).pipe(
    map(() => reminderActions.deleteDoseSuccess(id)),
    catchError(error => of(reminderActions.deleteDoseError(error.toString())))
  ))
);

export const epics = combineEpics(
  getDosesEpic,
  createDoseEpic,
  deleteDoseEpic
);
