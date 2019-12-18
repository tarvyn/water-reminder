import { WebPushService } from '@api/shared/services/web-push.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    WebPushService
  ],
  exports: [
    WebPushService
  ]
})
export class SharedModule {}
