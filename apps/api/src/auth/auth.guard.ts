import { ConfigService } from '@api/config/config.service';
import { verifyJWT } from '@api/utils/verify-jwt';
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private config: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const { jwt } = request.cookies;

    if (!jwt) {
      throw new UnauthorizedException();
    }

    const jwtVerified = await verifyJWT(jwt, this.config.get('jwtSecretKey'));

    if (!jwtVerified) {
      throw new UnauthorizedException();
    }

    return true;
  }
}
