import { IsDateString, IsOptional } from 'class-validator';

export class TimeRange {
  @IsDateString()
  from?: string;

  @IsOptional()
  @IsDateString()
  to?: string;
}
