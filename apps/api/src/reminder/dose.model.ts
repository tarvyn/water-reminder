import { CreateDoseDto, DoseDto, DoseVolume } from '@water-reminder/api-interfaces';
import { IsDateString, IsInt } from 'class-validator';

export type CreateDose = Omit<DoseDto, '_id'>;

export class CreateDoseData implements CreateDoseDto {
  @IsInt()
  volume: DoseVolume;

  @IsDateString()
  time: string;
}
