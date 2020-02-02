import { ConfigModule } from '../config/config.module';
import { SharedModule } from '../shared/shared.module';
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthGoogleStrategy } from './auth-google-strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ConfigModule, SharedModule, UserModule],
  controllers: [AuthController],
  providers: [AuthGoogleStrategy, AuthService]
})
export class AuthModule {}
