import { GoogleAuthUserPayload, SocialProvider } from '@api/auth/auth.model';
import { AuthService } from '@api/auth/auth.service';
import { ConfigService } from '@api/config/config.service';
import { environment } from '@api/environments/environment';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { catchPromiseError } from '@water-reminder/utils';
import { Request } from 'express';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private authService: AuthService,
    private config: ConfigService,
  ) {
    super({
      clientID: config.get('googleClientId'),
      clientSecret: config.get('googleClientSecret'),
      callbackURL: `${environment.apiHost}:${environment.apiPort}/api/auth/google/callback`,
      passReqToCallback: true,
      scope: ['profile', 'email']
    });
  }

  async validate(
    request: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: Error, result: GoogleAuthUserPayload) => void
  ): Promise<void> {
    const [error, jwt] = await catchPromiseError(
      this.authService.validateOAuthLogin(profile, SocialProvider.google)
    );

    if (error) {
      return done(error, null);
    }
    done(null, { jwt });
  }
}
