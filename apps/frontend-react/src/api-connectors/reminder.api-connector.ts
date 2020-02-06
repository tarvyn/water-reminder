import { API_PREFIX } from '@react-client/shared/constants/api-prefix';
import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import { NextDrinkTimeDto } from '@water-reminder/api-interfaces';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { first } from 'rxjs/operators';

class ReminderApiConnector {
  private url = `${API_PREFIX}/reminder`;

  updateNextDrinkTime(): Observable<NextDrinkTimeDto> {
    return fromFetch(`${this.url}/next-drink-time`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      parseResponse<NextDrinkTimeDto>(),
      first()
    );
  }
}

export const reminderApiConnector = new ReminderApiConnector();
