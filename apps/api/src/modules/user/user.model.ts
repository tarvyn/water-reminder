import { UserDto } from '@water-reminder/api-interfaces';
import { IsNotEmpty, ValidateNested, IsOptional, IsString, IsNumber, Min, Max } from 'class-validator';
import { PushSubscription } from 'web-push';

export interface User extends UserDto {
  readonly pushSubscriptions: Array<PushSubscription>;
}

type PushSubscriptionKeys = PushSubscription['keys'];

export class PushSubscriptionKeysData implements PushSubscriptionKeys {
  @IsNotEmpty()
  p256dh: string;

  @IsNotEmpty()
  auth: string;
}

export class PushSubscriptionData implements PushSubscription {
  @IsNotEmpty()
  endpoint: PushSubscription['endpoint'];

  @ValidateNested()
  keys: PushSubscriptionKeysData;
}

export class UpdateUserData implements Partial<UserDto> {
  @IsOptional()
  @IsString()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;

  @IsOptional()
  @IsNumber()
  awakeTime: number;

  @IsOptional()
  @IsNumber()
  sleepTime: number;

  @IsOptional()
  @IsString()
  nextDrinkTime: string;

  @IsOptional()
  @IsNumber()
  @Min(-14)
  @Max(12)
  utcOffset: number;
}
