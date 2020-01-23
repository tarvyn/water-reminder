import { GoogleAuthUserPayload, SocialProvider } from './auth.model';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { ConfigService } from '@api/config/config.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { catchPromiseError } from '@water-reminder/utils';
import { Request } from 'express';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private config: ConfigService,
  ) {
    super({
      clientID: config.get('googleClientId'),
      clientSecret: config.get('googleClientSecret'),
      callbackURL: `${config.get('clientHost')}/api/auth/login/google/callback`,
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
    const [error, user] = await catchPromiseError(
      this.userService.findOrCreate(profile, SocialProvider.google)
    );

    if (error) {
      return done(error, null);
    }

    done(null, { id: user.id });
  }
}
