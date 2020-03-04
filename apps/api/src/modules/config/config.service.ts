import { environment } from '@api/environments/environment';
import { rootPath } from '../shared/utils/root-path';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

type EnvironmentKey =
  'jwtSecretKey'
  | 'googleClientId'
  | 'googleClientSecret'
  | 'mongodbConnectionString'
  | 'vapidPrivateKey'
  | 'clientHost'
  | 'clientPort'
  | 'apiHost'
  | 'PORT';

@Injectable()
export class ConfigService {
  public readonly envConfig: Record<EnvironmentKey, string>;

  constructor() {
    const filePath = `${rootPath}/apps/api/development.env`;

    this.envConfig = environment.production
      ? process.env as Record<EnvironmentKey, string>
      : dotenv.parse(fs.readFileSync(filePath)) as Record<EnvironmentKey, string>;
  }

  get(key: EnvironmentKey): string {
    return this.envConfig[key];
  }
}
