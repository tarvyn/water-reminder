import { API_PREFIX } from '@react-client/shared/constants/api-prefix';
import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import { NotificationStatus } from '@water-reminder/api-interfaces';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { first } from 'rxjs/operators';

class NotificationApiConnector {
  private url = `${API_PREFIX}/notification`;

  updateStatus(
    notificationId: string,
    status: NotificationStatus
  ): Observable<void> {
    return fromFetch(`${this.url}/${notificationId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status }),
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      parseResponse<void>(),
      first()
    );
  }
}

export const notificationApiConnector = new NotificationApiConnector();
