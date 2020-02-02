import { ConfigService } from '../config/config.service';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { catchPromiseError } from '@water-reminder/utils';
import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import { UserService } from '../user/user.service';
import { UserSignInData, UserSignUpData } from './auth-validate.model';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private config: ConfigService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  @Post('sign-up')
  async signUp(
    @Res() response: Response,
    @Body() userSignUpData: UserSignUpData
  ): Promise<Response> {
    const [getUserError, existingUser] = await catchPromiseError(
      this.userService.findByEmail(userSignUpData.email)
    );

    if (getUserError) {
      throw new InternalServerErrorException(
        'Error when fetching user has occurred'
      );
    }

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const [createUserError, user] = await catchPromiseError(
      this.userService.create(userSignUpData)
    );

    if (createUserError) {
      throw new InternalServerErrorException(
        'Error when creating user has occurred'
      );
    }

    await this.authService.setAuthorizationCookie(response, { id: user._id });

    return response.json(user);
  }

  @Post('login')
  async login(
    @Res() response: Response,
    @Body() { email, password }: UserSignInData
  ): Promise<Response> {
    const [getUserError, user] = await catchPromiseError(
      this.userService.findByEmail(email)
    );

    if (getUserError) {
      throw new InternalServerErrorException(
        'Error when finding user has occurred'
      );
    }

    if (!user) {
      throw new BadRequestException('User was not found');
    }

    const passwordIsValid = await compare(password, user.password || '');

    if (!passwordIsValid) {
      throw new BadRequestException('Password is not valid');
    }

    await this.authService.setAuthorizationCookie(response, { id: user._id });

    return response.json(user);
  }

  /**
   * Initiate Google OAuth2 login flow
   */
  @Get('login/google')
  @UseGuards(PassportAuthGuard('google'))
  googleLogin(): void {}

  /**
   * Handle Google authentication callback
   */
  @Get('login/google/callback')
  @UseGuards(PassportAuthGuard('google'))
  async googleLoginCallback(
    @Req() { user: { id } }: Request,
    @Res() response: Response
  ): Promise<void> {
    if (id) {
      await this.authService.setAuthorizationCookie(response, { id });
      response.redirect(`${this.config.get('clientHost')}`);
    } else {
      response.redirect(`${this.config.get('clientHost')}/login/failed`);
    }
  }

  @Post('logout')
  logout(@Res() response: Response): void {
    this.authService.clearAuthorizationCookie(response);
    response.json({ message: 'Successfully logged out' });
  }
}
