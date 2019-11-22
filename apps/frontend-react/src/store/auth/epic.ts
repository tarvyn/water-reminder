import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import { authActions, ActionType } from '@react-client/store/auth/actions';
import { UserDto } from '@water-reminder/api-interfaces';
import { combineEpics, Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, switchMap } from 'rxjs/operators';

export const logoutEpic: Epic = action$ => action$.pipe(
  ofType(ActionType.Logout),
  switchMap(() => fromFetch('/api/auth/logout', { method: 'POST' }).pipe(
    parseResponse(),
    map(() => authActions.logoutSuccess()),
    catchError(error => of(authActions.logoutError(error.toString())))
  ))
);

export const getUserEpic: Epic = action$ => action$.pipe(
  ofType(ActionType.GetUser),
  switchMap(() => fromFetch('/api/auth/user').pipe(
    parseResponse(),
    map((user: UserDto) => authActions.getUserSuccess(user)),
    catchError(error => of(authActions.getUserError(error.toString())))
  ))
);

export const epics = combineEpics(
  getUserEpic,
  logoutEpic
);
