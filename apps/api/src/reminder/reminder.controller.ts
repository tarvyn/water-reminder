import { AuthGuard } from '@api/auth/auth.guard';
import { JWTPayload } from '@api/auth/auth.model';
import { ConfigService } from '@api/config/config.service';
import {
  Body,
  ConflictException,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Query,
  Req,
  UseGuards
} from '@nestjs/common';
import { DoseDto, DoseTimeRange } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { CreateDoseData } from './dose.model';
import { ReminderService } from './reminder.service';

@Controller('reminder')
@UseGuards(AuthGuard)
export class ReminderController {
  constructor(
    private config: ConfigService,
    private reminderService: ReminderService,
  ) {}

  @Get('doses')
  async getDoses(
    @Req() req: Request,
    @Query('timeRange') timeRange: DoseTimeRange
  ): Promise<Array<DoseDto>> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [getDosesError, doses] = await catchPromiseError(
      this.reminderService.findDrunkUserDosesForToday(id)
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
      this.reminderService.createDose({ userId: id, volume, time })
    );

    if (createDoseError) {
      throw new InternalServerErrorException();
    }

    return dose;
  }

  @Delete('doses/:id')
  async deleteDose(
    @Req() req: Request,
    @Param('id') doseId: string
  ): Promise<void> {
    const [deleteDoseError] = await catchPromiseError(
      this.reminderService.deleteDose(doseId)
    );

    if (deleteDoseError) {
      throw new ConflictException();
    }
  }
}
