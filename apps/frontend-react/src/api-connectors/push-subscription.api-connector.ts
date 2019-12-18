import { API_PREFIX } from '@react-client/shared/constants/api-prefix';
import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { first } from 'rxjs/operators';

class PushSubscriptionApiConnector {
  private url = `${API_PREFIX}/auth/user/update-push-subscription`;

  sendSubscription(subscription: PushSubscription): Observable<void> {
    return fromFetch(this.url, {
      method: 'PATCH',
      body: JSON.stringify(subscription),
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      parseResponse<void>(),
      first()
    );
  }
}

export const pushSubscriptionApiConnector = new PushSubscriptionApiConnector();
