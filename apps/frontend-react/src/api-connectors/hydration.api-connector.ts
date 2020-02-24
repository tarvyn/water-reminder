import { API_PREFIX } from '@react-client/shared/constants/api-prefix';
import { parseResponse } from '@react-client/shared/rxjs-operators/parse-response';
import {
  CreateDoseDto,
  DailyHydrationStatisticsDto,
  DoseDto
} from '@water-reminder/api-interfaces';
import { getNow } from '@water-reminder/utils';
import { startOfDay, startOfMonth, endOfMonth } from 'date-fns';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { first, map } from 'rxjs/operators';

class HydrationApiConnector {
  private url = `${API_PREFIX}/hydration`;

  getDoses(): Observable<Array<DoseDto>> {
    const params = new URLSearchParams({
      from: startOfDay(new Date()).toISOString()
    });

    return fromFetch(`${this.url}/doses?${params}`).pipe(
      parseResponse<Array<DoseDto>>(),
      first()
    );
  }

  getHydrationStatistics(): Observable<Array<DailyHydrationStatisticsDto>> {
    const params = new URLSearchParams({
      from: startOfMonth(getNow()).toISOString(),
      to: endOfMonth(getNow()).toISOString()
    });

    return fromFetch(`${this.url}/statistics?${params}`).pipe(
      parseResponse<Array<DailyHydrationStatisticsDto>>(),
      first()
    );
  }

  createDose(createDoseData: CreateDoseDto): Observable<DoseDto> {
    return fromFetch(`${this.url}/doses`, {
      method: 'POST',
      body: JSON.stringify(createDoseData),
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      parseResponse<DoseDto>(),
      first()
    );
  }

  deleteDose(id: string): Observable<void> {
    return fromFetch(`${this.url}/doses/${id}`, {
      method: 'DELETE'
    }).pipe(
      // TODO: fix
      map(() => undefined),
      first()
    );
  }
}

export const hydrationApiConnector = new HydrationApiConnector();
