import { CreateDose } from '../../../../apps/api/src/modules/hydration/dose.model';

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
  readonly awakeTime: number;
  readonly sleepTime: number;
  readonly nextDrinkTime: string;
  readonly utcOffset: number;
}

export type UserLoginDto = Pick<UserDto, 'email' | 'password'>;

export type UserSignUpDto = Pick<UserDto, 'email' | 'password' | 'firstName' | 'lastName'>;

export interface DoseDto extends BaseEntity {
  readonly time: string | Date;
  readonly volume: DoseVolume;
  readonly userId: string;
}

export type CreateDoseDto = Omit<CreateDose, '_id' | 'userId'>;

export interface ErrorResponse {
  readonly statusCode: number;
  readonly message: string;
}

export enum DoseVolume {
  cup = 200
}

/**
 * Public VAPID key for push notifications.
 */
export const vapidPublicKey = 'BO0o6h3SswzEA4tJ5VOn_GJQPy16gHmq5pRfawdpslYLd967NEpKhfnw65uQvo0rOoKGupkd2C86CEemNORY4WI';
