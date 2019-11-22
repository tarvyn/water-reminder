import { AuthController } from '@api/auth/auth.controller';
import { AuthService } from '@api/auth/auth.service';
import { GoogleStrategy } from '@api/auth/google.strategy';
import { UserSchemaModel } from '@api/auth/user.schema';
import { UserService } from '@api/auth/user.service';
import { ConfigModule } from '@api/config/config.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([UserSchemaModel])
  ],
  controllers: [
    AuthController
  ],
  providers: [
    GoogleStrategy,
    AuthService,
    UserService
  ]
})
export class AuthModule {}
