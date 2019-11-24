import { JWT_COOKIE_MAX_AGE, JWTPayload } from '@api/auth/auth.model';
import { UserService } from '@api/auth/user.service';
import { ConfigService } from '@api/config/config.service';
import { environment } from '@api/environments/environment';
import { verifyJWT } from '@api/utils/verify-jwt';
import { ConflictException, Controller, Get, Post, Req, Res, UnauthorizedException, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Request, Response } from 'express';
import { decode } from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) {}

  @Get('user')
  async getUser(@Req() req: Request): Promise<UserDto> {
    const { jwt } = req.cookies;

    if (!jwt) {
      throw new UnauthorizedException();
    }

    const jwtVerified = await verifyJWT(jwt, this.config.get('jwtSecretKey'));

    if (!jwtVerified) {
      throw new UnauthorizedException();
    }

    const { id } = decode(jwt) as JWTPayload;
    const [getUserError, user] = await catchPromiseError(this.userService.findById(id));

    if (getUserError) {
      throw new ConflictException();
    }

    return user;
  }

  /**
   * Initiate the Google OAuth2 login flow
   */
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin(): void {}

  /**
   * Handle successful res
   */
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req: Request, @Res() res: Response): void {
    const jwt: string = req.user.jwt;

    if (jwt) {
      res.cookie('jwt', jwt, { httpOnly: true, maxAge: JWT_COOKIE_MAX_AGE });
      res.redirect(`${environment.clientHost}:${environment.clientPort}`);
    } else {
      res.redirect(`${environment.clientHost}:${environment.clientPort}/login/failed`);
    }
  }

  @Post('logout')
  logout(@Res() res: Response): void {
    res.clearCookie('jwt');
    res.json({ message: 'Successfully logged out' });
  }
}
