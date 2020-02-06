import {
  Body,
  Controller,
  InternalServerErrorException,
  Param,
  Patch,
  UseGuards
} from '@nestjs/common';
import { catchPromiseError } from '@water-reminder/utils';
import { AuthGuard } from '../auth/auth.guard';
import { ConfigService } from '../config/config.service';
import { UpdateNotificationData } from './notification.model';
import { NotificationDocument } from './notification.schema';
import { NotificationService } from './notification.service';

@Controller('notification')
export class NotificationController {
  constructor(
    private config: ConfigService,
    private notificationService: NotificationService
  ) {}

  @Patch('/:id')
  @UseGuards(AuthGuard)
  async update(
    @Param('id') id: string,
    @Body() notificationData: UpdateNotificationData
  ): Promise<NotificationDocument> {
    const [updateNotificationError, notification] = await catchPromiseError(
      this.notificationService.update(id, notificationData)
    );

    if (updateNotificationError) {
      throw new InternalServerErrorException(
        'Error when updating notification has occurred'
      );
    }

    return notification;
  }
}
