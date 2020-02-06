import { Controller, InternalServerErrorException, Patch, Req, UseGuards } from '@nestjs/common';
import { NextDrinkTimeDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { AuthGuard } from '../auth/auth.guard';
import { JWTPayload } from '../auth/auth.model';
import { ConfigService } from '../config/config.service';
import { ReminderService } from './reminder.service';

@Controller('reminder')
@UseGuards(AuthGuard)
export class ReminderController {
  constructor(
    private config: ConfigService,
    private reminderService: ReminderService
  ) {}

  @Patch('/next-drink-time')
  async updateNextDrinkTime(
    @Req() req: Request
  ): Promise<NextDrinkTimeDto> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const nextDrinkTime = await this.reminderService.calculateNextDrinkTime(id);
    const [error] = await catchPromiseError(
      this.reminderService.updateNextDrinkTime(id, nextDrinkTime)
    );

    if (error) {
      throw new InternalServerErrorException(
        'Error when updating next drink time has occurred'
      );
    }

    return { nextDrinkTime };
  }
}
