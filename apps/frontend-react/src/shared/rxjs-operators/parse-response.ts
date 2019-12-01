import { ErrorResponse } from '@water-reminder/api-interfaces';
import { from, ObservableInput, OperatorFunction, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export function parseResponse<T>(): OperatorFunction<Response, T> {
  return input$ => input$.pipe(
    switchMap((response: Response): ObservableInput<T> => {
      if (response.ok) {
        return response.json();
      }

      return from(response.json()).pipe(
        switchMap((error: ErrorResponse) => {
          if (response.status === 500) {
            return throwError({ ...error, message: 'Some error has occurred' });
          }

          return throwError(error);
        })
      );
    })
  );
}
