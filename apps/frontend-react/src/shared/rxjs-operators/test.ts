import { Observable, ObservableInput, throwError, UnaryFunction } from 'rxjs';
import { switchMap } from 'rxjs/operators';

export function parseResponse<T>(): UnaryFunction<Observable<Response>, Observable<T>> {
  return input$ => input$.pipe(
    switchMap((response: Response): ObservableInput<T> => {
      if (response.ok) {
        return response.json();
      }

      return throwError({ status: response.status });
    }),
  );
}
