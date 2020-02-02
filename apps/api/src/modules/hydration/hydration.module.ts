import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoseSchemaModel } from './dose.schema';
import { HydrationController } from './hydration-controller';
import { HydrationService } from './hydration.service';

@Module({
  imports: [MongooseModule.forFeature([DoseSchemaModel])],
  controllers: [HydrationController],
  providers: [HydrationService],
  exports: [HydrationService]
})
export class HydrationModule {}
