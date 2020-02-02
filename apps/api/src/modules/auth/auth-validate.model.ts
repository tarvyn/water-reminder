import { UserDto, UserLoginDto, UserSignUpDto } from '@water-reminder/api-interfaces';
import { IsEmail, IsNotEmpty, MinLength, ValidateNested } from 'class-validator';
import { PushSubscription } from 'web-push';

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
