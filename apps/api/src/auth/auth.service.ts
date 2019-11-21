import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Profile } from 'passport-google-oauth20';
import { ConfigService } from '../config/config.service';
import { UserService } from './user.service';

export enum Provider {
  google = 'google'
}

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) {}

  async validateOAuthLogin(profile: Profile, provider: Provider): Promise<string> {
    const { id: thirdPartyId } = profile;
    const { id } = await this.userService.findOrCreate(profile, provider);
    // TODO: add types
    const payload = { id, provider, thirdPartyId };

    try {
      return sign(payload, this.config.get('jwtSecretKey'));
    } catch (err) {
      throw new InternalServerErrorException('Error when generating JWT token has occurred', err.message);
    }
  }
}
