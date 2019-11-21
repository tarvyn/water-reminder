import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, switchMap } from 'rxjs/operators';
import { GET_MESSAGE, getMessageError, getMessageSuccess } from './actions';

export const messageEpic: Epic = action$ => action$.pipe(
  ofType(GET_MESSAGE),
  switchMap(() => fromFetch('/api/hello').pipe(
    switchMap(res => res.json()),
    map(message => getMessageSuccess(message)),
    catchError(error => of(getMessageError(error.toString())))
  ))
);
