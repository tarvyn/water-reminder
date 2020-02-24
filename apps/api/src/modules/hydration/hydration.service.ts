import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  DailyHydrationStatisticsDto,
  DoseDto
} from '@water-reminder/api-interfaces';
import { eachDayOfInterval, parseISO, startOfDay } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { Model } from 'mongoose';
import { getUtcToZonedTime } from '../reminder/reminder.model';
import { SchemaCollection } from '../shared/collections';
import { UserService } from '../user/user.service';
import { CreateDose } from './dose.model';
import { DoseDocument } from './dose.schema';
import { TimeRange } from './time-range.model';

@Injectable()
export class HydrationService {
  constructor(
    @InjectModel(SchemaCollection.Dose)
    private readonly doseModel: Model<DoseDocument>,
    private readonly userService: UserService
  ) {}

  async find(
    userId: string,
    timeRange?: TimeRange
  ): Promise<Array<DoseDocument>> {
    return this.doseModel.find({
      userId,
      ...(timeRange
        ? {
            time: {
              $gte: timeRange.from,
              ...(timeRange.to ? { $lt: timeRange.to } : {})
            }
          }
        : {})
    });
  }

  async getStatistics(
    userId: string,
    timeRange: TimeRange
  ): Promise<Array<DailyHydrationStatisticsDto>> {
    const { timeZone } = await this.userService.findById(userId);
    const monthAccumulator = new Map(
      eachDayOfInterval({
        start: getUtcToZonedTime(parseISO(timeRange.from), timeZone),
        end: getUtcToZonedTime(parseISO(timeRange.to), timeZone)
      }).map(date => [zonedTimeToUtc(date, timeZone).toISOString(), 0])
    );

    const doses = await this.find(userId, timeRange);

    for (const dose of doses) {
      const time = zonedTimeToUtc(startOfDay(dose.time), timeZone);

      monthAccumulator.set(
        time.toISOString(),
        monthAccumulator.get(time.toISOString()) + dose.volume
      );
    }

    return Array.from(monthAccumulator.entries()).map(([date, amount]) => ({
      date: parseISO(date),
      amount
    }));
  }

  async createDose(dose: CreateDose): Promise<DoseDto> {
    const createdDose = await this.doseModel.create(dose);

    return createdDose.toJSON();
  }

  async deleteDose(id: string): Promise<void> {
    await this.doseModel.findByIdAndDelete(id);
  }
}
