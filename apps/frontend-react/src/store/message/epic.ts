import { messageActions, ActionType } from '@react-client/store/message/actions';
import { Epic, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { catchError, map, switchMap } from 'rxjs/operators';

export const messageEpic: Epic = action$ => action$.pipe(
  ofType(ActionType.GetMessage),
  switchMap(() => fromFetch('/api/hello').pipe(
    switchMap(res => res.json()),
    map(message => messageActions.getMessageSuccess(message)),
    catchError(error => of(messageActions.getMessageError(error.toString())))
  ))
);

export const epics = messageEpic;
