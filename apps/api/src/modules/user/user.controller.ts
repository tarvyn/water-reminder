import { ConfigService } from '../config/config.service';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  InternalServerErrorException,
  Patch,
  Req,
  UseGuards
} from '@nestjs/common';
import { UserDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { AuthGuard } from '../auth/auth.guard';
import { JWTPayload } from '../auth/auth.model';
import { PushSubscriptionData, UpdateUserData } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private config: ConfigService,
    private userService: UserService
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async getUser(@Req() req: Request): Promise<UserDto> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [getUserError, user] = await catchPromiseError(
      this.userService.findById(id)
    );

    if (getUserError) {
      throw new BadRequestException('User was not found');
    }

    return user;
  }

  @Patch()
  @UseGuards(AuthGuard)
  async update(
    @Req() req: Request,
    @Body() userData: UpdateUserData
  ): Promise<UserDto> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [updateUserError, user] = await catchPromiseError(
      this.userService.update(id, userData)
    );

    if (updateUserError) {
      throw new InternalServerErrorException(
        'Error when updating user has occurred'
      );
    }

    return user;
  }

  @Patch('update-push-subscription')
  @UseGuards(AuthGuard)
  async updatePushSubscription(
    @Req() req: Request,
    @Body() pushSubscription: PushSubscriptionData
  ): Promise<UserDto> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [updateUserError, user] = await catchPromiseError(
      this.userService.updatePushSubscription(id, pushSubscription)
    );

    if (updateUserError) {
      throw new InternalServerErrorException(
        'Error when updating user has occurred'
      );
    }

    return user;
  }
}
