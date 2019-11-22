import { ConfigService } from '@api/config/config.service';
import { Global, Module } from '@nestjs/common';
import * as path from 'path';

const paths = path.resolve(__dirname);
console.log(paths);

@Global()
@Module({
  providers: [ConfigService],
  exports: [ConfigService]
})
export class ConfigModule {}
