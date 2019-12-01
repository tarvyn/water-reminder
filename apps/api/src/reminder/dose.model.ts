import { DoseDto } from '@water-reminder/api-interfaces';

export type CreateDose = Omit<DoseDto, 'time' | '_id'>;
