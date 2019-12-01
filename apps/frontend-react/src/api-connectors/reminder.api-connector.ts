import { API_PREFIX } from '@react-client/shared/constants/api-prefix';
import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import { DoseDto, DoseTimeRange, DoseVolume } from '@water-reminder/api-interfaces';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { first, map } from 'rxjs/operators';

class ReminderApiConnector {
  private url = `${API_PREFIX}/reminder`;

  getDoses(): Observable<Array<DoseDto>> {
    const params = new URLSearchParams({ timeRange: DoseTimeRange.today });

    return fromFetch(`${this.url}/doses?${params}`).pipe(
      parseResponse<Array<DoseDto>>(),
      first()
    );
  }

  createDose(volume: DoseVolume): Observable<DoseDto> {
    return fromFetch('/api/reminder/doses', {
      method: 'POST',
      body: JSON.stringify({ volume }),
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      parseResponse<DoseDto>(),
      first()
    );
  }

  deleteDose(id: string): Observable<void> {
    return fromFetch(`/api/reminder/doses/${id}`, {
      method: 'DELETE'
    }).pipe(
      // TODO: fix
      map(() => undefined),
      first()
    );
  }
}

export const reminderApiConnector = new ReminderApiConnector();
