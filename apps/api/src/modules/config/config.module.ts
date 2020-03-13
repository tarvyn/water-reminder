import { ConfigService } from './config.service';
import { Global, Module } from '@nestjs/common';
import * as path from 'path';

const paths = path.resolve(__dirname);

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
