import { API_PREFIX } from '@react-client/shared/constants/api-prefix';
import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import { UserDto } from '@water-reminder/api-interfaces';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { first } from 'rxjs/operators';

class UserApiConnector {
  private url = `${API_PREFIX}/user`;

  getUser(): Observable<UserDto> {
    return fromFetch(this.url).pipe(
      parseResponse<UserDto>(),
      first()
    );
  }

  updateUserSubscription(subscription: PushSubscription): Observable<void> {
    return fromFetch(`${this.url}/update-push-subscription`, {
      method: 'PATCH',
      body: JSON.stringify(subscription),
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      parseResponse<void>(),
      first()
    );
  }

  updateUser(user: Partial<UserDto>): Observable<UserDto> {
    return fromFetch(this.url, {
      method: 'PATCH',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      parseResponse<UserDto>(),
      first()
    );
  }
}

export const userApiConnector = new UserApiConnector();
