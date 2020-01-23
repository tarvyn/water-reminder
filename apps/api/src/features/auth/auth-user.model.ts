import { UserDto, UserLoginDto, UserSignUpDto } from '@water-reminder/api-interfaces';
import { IsEmail, IsNotEmpty, MinLength, ValidateNested } from 'class-validator';
import { PushSubscription } from 'web-push';

export interface User extends UserDto {
  readonly pushSubscriptions: Array<PushSubscription>;
}

type PushSubscriptionKeys = PushSubscription['keys'];

export class UserSignInData implements UserLoginDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;
}

export class UserSignUpData extends UserSignInData implements UserSignUpDto {
  @MinLength(3)
  firstName: string;

  @MinLength(3)
  lastName: string;
}

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
