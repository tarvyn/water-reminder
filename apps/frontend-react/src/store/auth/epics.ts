import { authApiConnector } from '@react-client/api-connectors/auth.api-connector';
import { exposeOfTypeOperator } from '@react-client/shared/rxjs-operators/expose-of-type-operator';
import { Actions, ActionType, authActions } from '@react-client/store/auth/actions';
import { ErrorResponse } from '@water-reminder/api-interfaces';
import { combineEpics, Epic } from 'redux-observable';
import { EMPTY, from, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import history from '@react-client/shared/models/history';
import { actualizePushSubscription } from '../../service-worker/push-notifications';

const ofType = exposeOfTypeOperator<Actions>();

export const signUp: Epic = action$ => action$.pipe(
  ofType(ActionType.SignUp),
  switchMap(({ payload: { signUpData } }) => authApiConnector.signUp(signUpData).pipe(
    map(user => authActions.signUpSuccess(user)),
    tap(() => history.push('/')),
    catchError((error: ErrorResponse) => of(authActions.signUpError(error.message))),
  ))
);

export const login: Epic = action$ => action$.pipe(
  ofType(ActionType.Login),
  switchMap(({ payload: { loginData } }) => authApiConnector.login(loginData).pipe(
    map(user => authActions.loginSuccess(user)),
    tap(() => history.push('/')),
    catchError((error: ErrorResponse) => of(authActions.loginError(error.message)))
  ))
);

export const logoutEpic: Epic = action$ => action$.pipe(
  ofType(ActionType.Logout),
  switchMap(() => authApiConnector.logout().pipe(
    map(() => authActions.logoutSuccess()),
    tap(() => history.push('/sign-in')),
    catchError(error => of(authActions.logoutError(error.toString())))
  )),
);

export const getUserEpic: Epic = action$ => action$.pipe(
  ofType(ActionType.GetUser),
  switchMap(() => authApiConnector.getUser().pipe(
    map(user => authActions.getUserSuccess(user)),
    catchError(error => {
      history.push('/sign-in');

      return of(authActions.getUserError(error.toString()));
    })
  ))
);

export const actualizePushSubscriptionEpic: Epic = action$ => action$.pipe(
  ofType(ActionType.LoginSuccess),
  switchMap(() => from(actualizePushSubscription()).pipe(
    // TODO: fix;
    switchMap(() => EMPTY),
    catchError(() => EMPTY)
  ))
);

export const epics = combineEpics(
  signUp,
  login,
  getUserEpic,
  logoutEpic,
  actualizePushSubscriptionEpic
);
