import { DoseViewModel } from '@react-client/shared/types/hydration';
import { DailyHydrationStatisticsDto } from '@water-reminder/api-interfaces';

export interface State {
  readonly isLoading: boolean;
  readonly doses: Array<DoseViewModel>;
  readonly monthlyStatistics: Array<DailyHydrationStatisticsDto>;
}

export const initialState: State = {
  isLoading: true,
  doses: undefined,
  monthlyStatistics: []
};
