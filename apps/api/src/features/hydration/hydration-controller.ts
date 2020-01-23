import { AuthGuard } from '../auth/auth.guard';
import { JWTPayload } from '../auth/auth.model';
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
    @Query('timeRange') timeRange: DoseTimeRange
  ): Promise<Array<DoseDto>> {
    const { jwt } = req.cookies;
    const { id } = decode(jwt) as JWTPayload;
    const [getDosesError, doses] = await catchPromiseError(
      this.hydrationService.findDrunkUserDosesForToday(id)
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
