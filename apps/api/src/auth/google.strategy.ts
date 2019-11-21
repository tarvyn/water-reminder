import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-google-oauth20';
import { ConfigService } from '../config/config.service';
import { AuthService, Provider } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

  constructor(
    private authService: AuthService,
    private config: ConfigService,
  ) {
    super({
      clientID: config.get('googleClientId'),
      clientSecret: config.get('googleClientSecret'),
      callbackURL: 'http://localhost:3333/api/auth/google/callback',
      passReqToCallback: true,
      scope: ['profile', 'email']
    });
  }

  async validate(
    request: any,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: Function
  ) {
    try {
      console.log(profile);

      const jwt = await this.authService.validateOAuthLogin(
        profile,
        Provider.google
      );
      const user = { jwt };

      done(null, user);
    } catch (err) {
      console.log(err);
      done(err, false);
    }
  }

}
