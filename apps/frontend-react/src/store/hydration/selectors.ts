import { RootState } from '@react-client/store/reducer';
import { State } from '@react-client/store/hydration/state';
import { parseISO,format } from 'date-fns';

export const selectHydrationState = <T>(selectState: (state: State) => T) => {
  return (state: RootState) => selectState(state.hydration);
};

export const selectMonthlyStatistics = selectHydrationState(
  (state: State): State['monthlyStatistics'] =>
    state.monthlyStatistics.map(dailyStat => ({
      amount: dailyStat.amount / 1000,
      date: format(parseISO(dailyStat.date as string), 'dd')
    }))
);
