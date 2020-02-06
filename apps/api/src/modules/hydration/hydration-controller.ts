import { AuthGuard } from '../auth/auth.guard';
import { JWTPayload } from '../auth/auth.model';
import { ConfigService } from '../config/config.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete, forwardRef,
  Get, Inject,
  InternalServerErrorException,
  Param,
  Post,
  Query,
  Req,
  UseGuards
} from '@nestjs/common';
import { DoseDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { ReminderService } from '../reminder/reminder.service';
import { TimeRange } from './time-range.model';
import { CreateDoseData } from './dose.model';
import { HydrationService } from './hydration.service';

@Controller('hydration')
@UseGuards(AuthGuard)
export class HydrationController {
  constructor(
    private config: ConfigService,
    private hydrationService: HydrationService,
  ) {}

  @Get('doses')
  async getDoses(
    @Req() req: Request,
    @Query() timeRange: TimeRange
  ): Promise<Array<DoseDto>> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [getDosesError, doses] = await catchPromiseError(
      this.hydrationService.find(id, timeRange)
    );

    if (getDosesError) {
      throw new ConflictException();
    }

    return doses;
  }

  @Post('doses')
  async createDose(
    @Req() req: Request,
    @Body() { volume, time }: CreateDoseData
  ): Promise<DoseDto> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [createDoseError, dose] = await catchPromiseError(
      this.hydrationService.createDose({ userId: id, volume, time })
    );

    if (createDoseError) {
      throw new InternalServerErrorException();
    }

    // this.reminderService.calculateNextDrinkTime()
    return dose;
  }

  @Delete('doses/:id')
  async deleteDose(
    @Req() req: Request,
    @Param('id') doseId: string
  ): Promise<void> {
    const [deleteDoseError] = await catchPromiseError(
      this.hydrationService.deleteDose(doseId)
    );

    if (deleteDoseError) {
      throw new ConflictException();
    }
  }
}
