import { CreateDoseDto, DoseDto, DoseVolume, OmitId } from '@water-reminder/api-interfaces';
import { IsDateString, IsInt } from 'class-validator';

export type CreateDose = OmitId<DoseDto>;

export class CreateDoseData implements CreateDoseDto {
  @IsInt()
  volume: DoseVolume;

  @IsDateString()
  time: string;
}
