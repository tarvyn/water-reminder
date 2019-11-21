import { combineEpics, Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, switchMap } from 'rxjs/operators';
import { parseResponse } from '../../shared/rxjs-operators/test';
import { GET_USER, getUserError, getUserSuccess, LOGOUT, logoutError, logoutSuccess } from './actions';

export const logoutEpic: Epic = action$ => action$.pipe(
  ofType(LOGOUT),
  switchMap(() => fromFetch('/api/auth/logout', { method: 'POST' }).pipe(
    parseResponse(),
    map(message => logoutSuccess(message)),
    catchError(error => of(logoutError(error.toString())))
  ))
);

export const getUserEpic: Epic = action$ => action$.pipe(
  ofType(GET_USER),
  switchMap(() => fromFetch('/api/auth/user').pipe(
    parseResponse(),
    map(user => getUserSuccess(user)),
    catchError(error => of(getUserError(error.toString())))
  ))
);

export const authEpics = combineEpics(
  getUserEpic,
  logoutEpic
);
