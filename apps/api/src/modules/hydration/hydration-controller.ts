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
import { DailyHydrationStatisticsDto, DoseDto } from '@water-reminder/api-interfaces';
import { catchPromiseError } from '@water-reminder/utils';
import { Request } from 'express';
import { decode } from 'jsonwebtoken';
import { AuthGuard } from '../auth/auth.guard';
import { JWTPayload } from '../auth/auth.model';
import { ConfigService } from '../config/config.service';
import { CreateDoseData } from './dose.model';
import { HydrationService } from './hydration.service';
import { TimeRange } from './time-range.model';

@Controller('hydration')
@UseGuards(AuthGuard)
export class HydrationController {
  constructor(
    private config: ConfigService,
    private hydrationService: HydrationService
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

  @Get('statistics')
  async getStatistics(
    @Req() req: Request,
    @Query() timeRange: TimeRange
  ): Promise<Array<DailyHydrationStatisticsDto>> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [error, statistics] = await catchPromiseError(
      this.hydrationService.getStatistics(id, timeRange)
    );

    if (error) {
      throw new ConflictException();
    }

    return statistics;
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
