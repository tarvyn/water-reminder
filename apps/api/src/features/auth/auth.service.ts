import { JWT_COOKIE_MAX_AGE, JWT_COOKIE_NAME, JWTPayload } from './auth.model';
import { ConfigService } from '@api/config/config.service';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Response } from 'express';
import { sign } from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(
    private config: ConfigService,
  ) {}

  async setAuthorizationCookie(response: Response, payload: JWTPayload): Promise<void> {
    const jwt = await this.generateJWT(payload);

    response.cookie(JWT_COOKIE_NAME, jwt, { httpOnly: true, maxAge: JWT_COOKIE_MAX_AGE });
  }

  clearAuthorizationCookie(response: Response): void {
    response.clearCookie(JWT_COOKIE_NAME);
  }

  private generateJWT(payload: JWTPayload): string {
    try {
      return sign(payload, this.config.get('jwtSecretKey'));
    } catch (err) {
      throw new InternalServerErrorException('Error when generating JWT token has occurred: ', err.message);
    }
  }
}
