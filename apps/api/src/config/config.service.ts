import { rootPath } from '@api/utils/root-path';
import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

type EnvironmentKey =
  'jwtSecretKey'
  | 'googleClientId'
  | 'googleClientSecret'
  | 'mongodbConnectionString';

@Injectable()
export class ConfigService {
  private readonly envConfig: Record<EnvironmentKey, string>;

  constructor() {
    const filePath = `${rootPath}/apps/api/development.env`;

    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  get(key: EnvironmentKey): string {
    return this.envConfig[key];
  }
}
