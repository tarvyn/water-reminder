import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '../config/config.module';
import { UserController } from './user.controller';
import { UserSchemaModel } from './user.schema';
import { UserService } from './user.service';

@Module({
  imports: [ConfigModule, MongooseModule.forFeature([UserSchemaModel])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
