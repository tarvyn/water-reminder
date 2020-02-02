import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DoseDto } from '@water-reminder/api-interfaces';
import { Model } from 'mongoose';
import { SchemaCollection } from '../shared/collections';
import { TimeRange } from './dose-validate.model';
import { CreateDose } from './dose.model';
import { DoseDocument } from './dose.schema';

@Injectable()
export class HydrationService {
  constructor(
    @InjectModel(SchemaCollection.Dose)
    private readonly doseModel: Model<DoseDocument>
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

  async createDose(dose: CreateDose): Promise<DoseDto> {
    const createdDose = await this.doseModel.create(dose);

    return createdDose.toJSON();
  }

  async deleteDose(id: string): Promise<void> {
    await this.doseModel.findByIdAndDelete(id);
  }
}
