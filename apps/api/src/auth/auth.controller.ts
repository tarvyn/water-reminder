import {
  ConflictException,
  Controller,
  Get,
  Next,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Request, Response } from 'express';
import { decode } from 'jsonwebtoken';
import { ConfigService } from '../config/config.service';
import { verifyJWT } from '../utils/jwt';
import { UserService } from './user.service';

@Controller('auth')
export class AuthController {

  constructor(
    private config: ConfigService,
    private userService: UserService,
  ) {}

  @Get('user')
  async getUser(@Req() req: Request): Promise<UserDto> {
    // TODO: override cookies type
    const { jwt } = req.cookies;

    if (!jwt) {
      throw new UnauthorizedException();
    }

    const [error] = await catchPromiseError(verifyJWT(jwt, this.config.get('jwtSecretKey')));

    if (error) {
      throw new UnauthorizedException();
    }

    // TODO: Add types
    const { id } = decode(jwt) as any;

    const [getUserError, user] = await catchPromiseError(this.userService.findById(id));

    if (getUserError) {
      throw new ConflictException();
    }

    return user;
  }

  /** Initiate the Google OAuth2 login flow */
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin(): void {}

  /** Handle successful res */
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req: Request, @Res() res: Response): void {
    // TODO: fix any by correct Response User declaration
    const jwt: string = (req.user as any).jwt;

    if (jwt) {
      res.cookie('jwt', jwt, { httpOnly: true, maxAge: 1000 * 60 * 60 });
      res.redirect('https://localhost');
    } else {
      res.redirect('https://localhost/login/failed');
    }
  }

  @Post('logout')
  logout(@Res() res: Response): void {
    res.clearCookie('jwt');
    res.json({ message: 'Successfully logged out' });
  }
}
