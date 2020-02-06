import { reminderApiConnector } from '@react-client/api-connectors/reminder.api-connector';
import { ActionType as AuthActionType } from '@react-client/store/auth/actions';
import { ActionType as HydrationActionType } from '@react-client/store/hydration/actions';
import { reminderActions } from '@react-client/store/reminder/actions';
import { combineEpics, Epic } from 'redux-observable';
import { EMPTY, from } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';

export const actualizeNextDrinkTimeEpic: Epic = action$ =>
  action$.pipe(
    filter(action =>
      [
        AuthActionType.LoginSuccess,
        AuthActionType.GetUserSuccess,
        AuthActionType.SignUpSuccess,
        HydrationActionType.CreateDoseSuccess,
        HydrationActionType.DeleteDoseSuccess
      ].includes(action.type)
    ),
    mergeMap(() =>
      from(reminderApiConnector.updateNextDrinkTime()).pipe(
        map(nextDrinkTimeResponse =>
          reminderActions.calculateNextDrinkTimeSuccess(nextDrinkTimeResponse)
        ),
        catchError(() => EMPTY)
      )
    )
  );

export const epics = combineEpics(actualizeNextDrinkTimeEpic);
