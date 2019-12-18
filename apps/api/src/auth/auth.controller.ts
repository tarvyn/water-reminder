import { PushSubscriptionData, UserSignInData, UserSignUpData } from '@api/auth/auth-user.model';
import { AuthGuard } from '@api/auth/auth.guard';
import { JWTPayload } from '@api/auth/auth.model';
import { AuthService } from '@api/auth/auth.service';
import { UserService } from '@api/auth/user.service';
import { ConfigService } from '@api/config/config.service';
import { WebPushService } from '@api/shared/services/web-push.service';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Patch,
  Post,
  Req,
  Res,
  UseGuards
} from '@nestjs/common';
import { AuthGuard as PassportAuthGuard } from '@nestjs/passport';
import { UserDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { compare } from 'bcryptjs';
import { Request, Response } from 'express';
import { decode } from 'jsonwebtoken';

@Controller('auth')
export class AuthController {
  constructor(
    private config: ConfigService,
    private userService: UserService,
    private authService: AuthService,
    private webPushService: WebPushService,
  ) {}

  @Get('user')
  @UseGuards(AuthGuard)
  async getUser(@Req() req: Request): Promise<UserDto> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [getUserError, user] =
      await catchPromiseError(this.userService.findById(id));

    if (getUserError) {
      throw new BadRequestException('User was not found');
    }

    return user;
  }

  @Patch('user/update-push-subscription')
  @UseGuards(AuthGuard)
  async updatePushSubscription(
    @Req() req: Request,
    @Body() pushSubscription: PushSubscriptionData
  ): Promise<UserDto> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [updateUserError, user] =
      await catchPromiseError(
        this.userService.updatePushSubscription(id, pushSubscription)
      );

    if (updateUserError) {
      throw new InternalServerErrorException('Error when updating user has occurred');
    }

    return user;
  }

  /**
   * Sign up by email and password
   */
  @Post('sign-up')
  async signUp(
    @Res() response: Response,
    @Body() userSignUpData: UserSignUpData
  ): Promise<Response> {
    const [getUserError, existingUser] =
      await catchPromiseError(this.userService.findByEmail(userSignUpData.email));

    if (getUserError) {
      throw new InternalServerErrorException('Error when fetching user has occurred');
    }

    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    const [createUserError, user] =
      await catchPromiseError(this.userService.create(userSignUpData));

    if (createUserError) {
      throw new InternalServerErrorException('Error when creating user has occurred');
    }

    await this.authService.setAuthorizationCookie(response, { id: user._id });

    return response.json(user);
  }

  /**
   * Login by email and password
   */
  @Post('login')
  async login(
    @Res() response: Response,
    @Body() { email, password }: UserSignInData
  ): Promise<Response> {
    const [getUserError, user] =
      await catchPromiseError(this.userService.findByEmail(email));

    if (getUserError) {
      throw new InternalServerErrorException('Error when finding user has occurred');
    }

    if (!user) {
      throw new BadRequestException('User was not found');
    }

    const passwordIsValid = await compare(password, user.password || '');

    if (!passwordIsValid) {
      throw new BadRequestException('Password is not valid');
    }

    const { pushSubscriptions } = user;
    const [pushSubscription] = pushSubscriptions;

    const [error, sendNotificationResult] = await catchPromiseError(
      this.webPushService.sendNotification(
        pushSubscription,
        'You just successfully logged in'
      )
    );

    console.log(sendNotificationResult || error);

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
