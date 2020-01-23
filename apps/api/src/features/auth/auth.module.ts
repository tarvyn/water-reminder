import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './google.strategy';
import { UserSchemaModel } from './user.schema';
import { UserService } from './user.service';
import { ConfigModule } from '@api/config/config.module';
import { SharedModule } from '@api/shared/shared.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

// TODO: separate User module from Auth module
@Module({
  imports: [
    ConfigModule,
    SharedModule,
    MongooseModule.forFeature([UserSchemaModel])
  ],
  controllers: [
    AuthController
  ],
  providers: [
    GoogleStrategy,
    AuthService,
    UserService,
  ],
  exports: [
    UserService
  ]
})
export class AuthModule {}
