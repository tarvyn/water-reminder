import { UserLoginDto, UserSignUpDto } from '@water-reminder/api-interfaces';
import { IsEmail, MinLength } from 'class-validator';

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
