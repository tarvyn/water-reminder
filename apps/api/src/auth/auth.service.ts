import { JWTPayload, SocialProvider } from '@api/auth/auth.model';
import { UserService } from '@api/auth/user.service';
import { ConfigService } from '@api/config/config.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Profile } from 'passport-google-oauth20';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) {}

  async validateOAuthLogin(profile: Profile, provider: SocialProvider): Promise<string> {
    const { id: thirdPartyId } = profile;
    const { id } = await this.userService.findOrCreate(profile, provider);
    const payload: JWTPayload = { id, provider, thirdPartyId };

    try {
      return sign(payload, this.config.get('jwtSecretKey'));
    } catch (err) {
      throw new InternalServerErrorException('Error when generating JWT token has occurred: ', err.message);
    }
  }
}
