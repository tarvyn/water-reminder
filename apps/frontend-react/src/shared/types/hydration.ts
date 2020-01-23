import { DoseDto } from '@water-reminder/api-interfaces';

export type DoseViewModel = Omit<DoseDto, 'time'> & {
  readonly time: Date;
};
