import {
  Auditable,
  NOTIFICATION_STATUSES_COUNT,
  NotificationDto
} from '@water-reminder/api-interfaces';
import { IsNumber, Max, Min } from 'class-validator';

export type CreateNotification = Omit<NotificationDto, keyof Auditable>;

export class UpdateNotificationData implements Partial<NotificationDto> {
  @IsNumber()
  @Min(0)
  @Max(NOTIFICATION_STATUSES_COUNT - 1)
  status: number;
}
