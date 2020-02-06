import { authApiConnector } from '@react-client/api-connectors/auth.api-connector';
import { userApiConnector } from '@react-client/api-connectors/user.api-connector';
import history from '@react-client/shared/models/history';
import { exposeOfTypeOperator } from '@react-client/shared/rxjs-operators/expose-of-type-operator';
import {
  Actions,
  ActionType,
  authActions
} from '@react-client/store/auth/actions';
import { ErrorResponse } from '@water-reminder/api-interfaces';
import { getTimeZone } from '@water-reminder/utils';
import { combineEpics, Epic } from 'redux-observable';
import { EMPTY, from, of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';
import { actualizePushSubscription } from '../../service-worker/client/push-subscriptions';

const ofType = exposeOfTypeOperator<Actions>();

export const signUp: Epic = action$ =>
  action$.pipe(
    ofType(ActionType.SignUp),
    switchMap(({ payload: { signUpData } }) =>
      authApiConnector.signUp(signUpData).pipe(
        map(user => authActions.signUpSuccess(user)),
        tap(() => history.push('/')),
        catchError((error: ErrorResponse) =>
          of(authActions.signUpError(error.message))
        )
      )
    )
  );

export const login: Epic = action$ =>
  action$.pipe(
    ofType(ActionType.Login),
    switchMap(({ payload: { loginData } }) =>
      authApiConnector.login(loginData).pipe(
        map(user => authActions.loginSuccess(user)),
        tap(() => history.push('/')),
        catchError((error: ErrorResponse) =>
          of(authActions.loginError(error.message))
        )
      )
    )
  );

export const logoutEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionType.Logout),
    switchMap(() =>
      authApiConnector.logout().pipe(
        map(() => authActions.logoutSuccess()),
        tap(() => history.push('/sign-in')),
        catchError(error => of(authActions.logoutError(error.toString())))
      )
    )
  );

export const getUserEpic: Epic = action$ =>
  action$.pipe(
    ofType(ActionType.GetUser),
    switchMap(() =>
      userApiConnector.getUser().pipe(
        map(user => authActions.getUserSuccess(user)),
        catchError(error => {
          history.push('/sign-in');

          return of(authActions.getUserError(error.toString()));
        })
      )
    )
  );

export const actualizePushSubscriptionEpic: Epic = action$ =>
  action$.pipe(
    filter(action =>
      [ActionType.LoginSuccess, ActionType.GetUserSuccess].includes(action.type)
    ),
    switchMap(() =>
      from(actualizePushSubscription()).pipe(
        // TODO: fix;
        switchMap(() => EMPTY),
        catchError(() => EMPTY)
      )
    )
  );

export const actualizeUserTimeZoneEpic: Epic = action$ =>
  action$.pipe(
    filter(action =>
      [ActionType.LoginSuccess, ActionType.GetUserSuccess].includes(action.type)
    ),
    switchMap(() =>
      from(
        userApiConnector.updateUser({
          timeZone: getTimeZone(),
          // TODO: implement ui
          awakeTime: 9.5,
          sleepTime: 23.5
        })
      ).pipe(
        // TODO: fix;
        switchMap(() => EMPTY),
        catchError(() => EMPTY)
      )
    )
  );

export const epics = combineEpics(
  signUp,
  login,
  getUserEpic,
  logoutEpic,
  actualizePushSubscriptionEpic,
  actualizeUserTimeZoneEpic
);
