import { Module } from '@nestjs/common';
import * as path from 'path';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: ConfigService,
      // TODO: fix weirdly resolved path
      useValue: new ConfigService(path.resolve(__dirname, '../../../apps/api/development.env')),
    }
  ],
  exports: [ConfigService]
})
export class ConfigModule {}
