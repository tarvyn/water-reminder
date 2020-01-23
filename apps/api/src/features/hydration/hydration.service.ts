import { SchemaCollection } from '@api/shared/collections';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { DoseDto } from '@water-reminder/api-interfaces';
import { Model } from 'mongoose';
import { CreateDose } from './dose.model';
import { DoseDocument } from './dose.schema';

@Injectable()
export class HydrationService {
  constructor(
    @InjectModel(SchemaCollection.Dose)
    private readonly doseModel: Model<DoseDocument>,
  ) {}

  async findDrunkUserDosesForToday(userId: string): Promise<Array<DoseDto>> {
    return this.doseModel.find({ userId });
  }

  async createDose(dose: CreateDose): Promise<DoseDto> {
    const createdDose = await this.doseModel.create(dose);

    return createdDose.toJSON();
  }

  async deleteDose(id: string): Promise<void> {
    await this.doseModel.findByIdAndDelete(id);
  }
}
