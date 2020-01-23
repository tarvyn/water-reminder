import { hydrationApiConnector } from '@react-client/api-connectors/hydration.api-connector';
import { exposeOfTypeOperator } from '@react-client/shared/rxjs-operators/expose-of-type-operator';
import { Actions, ActionType, hydrationActions } from '@react-client/store/hydration/actions';
import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

const ofType = exposeOfTypeOperator<Actions>();

export const getDosesEpic: Epic<Actions> = action$ => action$.pipe(
  ofType(ActionType.GetDoses),
  switchMap(() => hydrationApiConnector.getDoses().pipe(
    map(doses => hydrationActions.getDosesSuccess(
      doses.map(dose => ({
        ...dose,
        time: new Date(dose.time)
      }))
    )),
    catchError(error => of(hydrationActions.getDosesError(error.toString())))
  ))
);

export const createDoseEpic: Epic<Actions> = action$ => action$.pipe(
  ofType(ActionType.CreateDose),
  mergeMap(({ payload: { time, volume } }) => hydrationApiConnector
    .createDose({ time: time.toISOString(), volume }).pipe(
      map(dose => hydrationActions.createDoseSuccess(dose)),
      catchError(error => of(hydrationActions.createDoseError(error.toString())))
    ))
);

export const deleteDoseEpic: Epic<Actions> = action$ => action$.pipe(
  ofType(ActionType.DeleteDose),
  mergeMap(({ payload: { id } }) => hydrationApiConnector.deleteDose(id).pipe(
    map(() => hydrationActions.deleteDoseSuccess(id)),
    catchError(error => of(hydrationActions.deleteDoseError(error.toString())))
  ))
);

export const epics = combineEpics(
  getDosesEpic,
  createDoseEpic,
  deleteDoseEpic
);
