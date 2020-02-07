import { userApiConnector } from '@react-client/api-connectors/user.api-connector';
import { exposeOfTypeOperator } from '@react-client/shared/rxjs-operators/expose-of-type-operator';
import {
  Actions,
  ActionType,
  settingsActions
} from '@react-client/store/settings/actions';
import { combineEpics, Epic } from 'redux-observable';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

const ofType = exposeOfTypeOperator<Actions>();

export const setAwakeTimeEpic: Epic<Actions> = action$ =>
  action$.pipe(
    ofType(ActionType.SetAwakeTime),
    mergeMap(({ payload: { awakeTime } }) =>
      userApiConnector.updateUser({ awakeTime }).pipe(
        map(() => settingsActions.setAwakeTimeSuccess()),
        catchError(() => of(settingsActions.setAwakeTimeError(awakeTime)))
      )
    )
  );

export const setSleepTimeEpic: Epic<Actions> = action$ =>
  action$.pipe(
    ofType(ActionType.SetSleepTime),
    mergeMap(({ payload: { sleepTime } }) =>
      userApiConnector.updateUser({ sleepTime }).pipe(
        map(() => settingsActions.setSleepTimeSuccess()),
        catchError(() => of(settingsActions.setSleepTimeError(sleepTime)))
      )
    )
  );

export const epics = combineEpics(setAwakeTimeEpic, setSleepTimeEpic);
