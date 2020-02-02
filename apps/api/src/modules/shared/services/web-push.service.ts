import { ConfigService } from '../../config/config.service';
import { Injectable } from '@nestjs/common';
import { vapidPublicKey } from '@water-reminder/api-interfaces';
import * as webPush from 'web-push';
import { SendResult } from 'web-push';
import { PushSubscriptionData } from '../../user/user.model';

@Injectable()
export class WebPushService {
  constructor(private config: ConfigService) {}

  sendNotification(
    pushSubscription: PushSubscriptionData,
    payload: string | Buffer | null
  ): Promise<SendResult> {
    return webPush.sendNotification(pushSubscription, payload, {
      vapidDetails: {
        privateKey: this.config.get('vapidPrivateKey'),
        publicKey: vapidPublicKey,
        subject: 'mailto:tar.vynnychuk@gmail.com'
      }
    });
  }
}
