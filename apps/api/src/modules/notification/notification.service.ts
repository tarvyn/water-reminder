import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  DoseDto,
  NotificationPayloadDto,
  NotificationStatus,
  vapidPublicKey
} from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Model } from 'mongoose';
import * as webPush from 'web-push';
import { ConfigService } from '../config/config.service';
import { SchemaCollection } from '../shared/collections';
import { User } from '../user/user.model';
import {
  CreateNotification,
  UpdateNotificationData
} from './notification.model';
import { NotificationDocument } from './notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(SchemaCollection.Notification)
    private readonly notificationDocumentModel: Model<NotificationDocument>,
    private readonly config: ConfigService
  ) {}

  async findLast(userId: string): Promise<NotificationDocument> {
    return this.notificationDocumentModel.findOne(
      { userId },
      {},
      { sort: { updatedAt: -1 } }
    );
  }

  async update(
    id: string,
    updateData: UpdateNotificationData
  ): Promise<NotificationDocument> {
    return this.notificationDocumentModel.findByIdAndUpdate(id, updateData);
  }

  async create(notification: CreateNotification): Promise<DoseDto> {
    const createdNotification = await this.notificationDocumentModel.create(
      notification
    );

    return createdNotification.toJSON();
  }

  async notify(user: User, message: string): Promise<void> {
    const { _id: userId, pushSubscriptions, email } = user;
    const [pushSubscription] = pushSubscriptions;

    if (!pushSubscription) {
      console.log('subscription was not found for user', email);

      return;
    }

    const notification = await this.create({
      userId,
      message,
      status: NotificationStatus.untouched
    });

    const payload: NotificationPayloadDto = {
      message,
      notificationId: notification._id
    };

    const [error, sendNotificationResult] = await catchPromiseError(
      webPush.sendNotification(pushSubscription, JSON.stringify(payload), {
        vapidDetails: {
          privateKey: this.config.get('vapidPrivateKey'),
          publicKey: vapidPublicKey,
          subject: 'mailto:tar.vynnychuk@gmail.com'
        }
      })
    );

    if (!error) {
      console.log('error when sending push notification occurred', error);

      return;
    }

    console.log('send notification result', sendNotificationResult);
  }
}
