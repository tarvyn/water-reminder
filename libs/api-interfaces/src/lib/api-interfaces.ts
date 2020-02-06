export type OmitId<T extends BaseEntity> = Omit<T, '_id'>;

export interface BaseEntity {
  readonly _id: string;
}

export interface Auditable {
  readonly createdAt: string | Date;
  readonly updatedAt: string | Date;
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
  readonly nextDrinkTime: Date;
  readonly timeZone: string;
}

export type UserLoginDto = Pick<UserDto, 'email' | 'password'>;

export type UserSignUpDto = Pick<
  UserDto,
  'email' | 'password' | 'firstName' | 'lastName'
>;

export interface DoseDto extends BaseEntity {
  readonly time: string | Date;
  readonly volume: DoseVolume;
  readonly userId: string;
}

export interface NextDrinkTimeDto {
  readonly nextDrinkTime: Date;
}

export type CreateDoseDto = Omit<OmitId<DoseDto>, 'userId'>;

export enum NotificationStatus {
  closed,
  opened,
  untouched
}

export interface DrinkDoseMessage {
  readonly type: 'drink-dose';
}

export interface OpenNotificationMessage {
  readonly type: 'open-notification';
  readonly payload: {
    readonly notificationId: string;
  };
}

export interface CloseNotificationMessage {
  readonly type: 'close-notification';
  readonly payload: {
    readonly notificationId: string;
  };
}

export type ServiceWorkerMessage =
  | DrinkDoseMessage
  | OpenNotificationMessage
  | CloseNotificationMessage;

export interface NotificationPayloadDto {
  readonly message: string;
  readonly notificationId: string;
}

export const NOTIFICATION_STATUSES_COUNT =
  Object.keys(NotificationStatus).length / 2;

export interface NotificationDto extends Auditable {
  readonly userId: string;
  readonly message: string;
  readonly status: NotificationStatus;
}

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
export const vapidPublicKey =
  'BO0o6h3SswzEA4tJ5VOn_GJQPy16gHmq5pRfawdpslYLd967NEpKhfnw65uQvo0rOoKGupkd2C86CEemNORY4WI';
