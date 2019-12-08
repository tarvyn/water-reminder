import { CreateDose } from '../../../../apps/api/src/reminder/dose.model';

export type OmitId<T extends BaseEntity> = Omit<T, '_id'>;

export interface BaseEntity {
  readonly _id: string;
}

export interface UserDto extends BaseEntity {
  readonly email: string;
  readonly password?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly imageUrl: string;
  readonly provider: string;
  readonly thirdPartyId: string;
}

export type UserLoginDto = Pick<UserDto, 'email' | 'password'>;

export type UserSignUpDto = Pick<UserDto, 'email' | 'password' | 'firstName' | 'lastName'>;

export interface DoseDto extends BaseEntity {
  readonly time: string;
  readonly volume: DoseVolume;
  readonly userId: string;
}

export type CreateDoseDto = Omit<CreateDose, '_id' | 'userId'>;

export interface ErrorResponse {
  readonly statusCode: number;
  readonly message: string;
}

export enum DoseTimeRange {
  today = 'today'
}

export enum DoseVolume {
  cup = 200
}
