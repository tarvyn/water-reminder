import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HydrationModule } from './hydration/hydration.module';
import { ReminderModule } from './reminder/reminder.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AuthModule,
    HydrationModule,
    ReminderModule,
    UserModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService): MongooseModuleOptions => ({
        uri: configService.get('mongodbConnectionString'),
        useNewUrlParser: true,
        useUnifiedTopology: true
      }),
      inject: [ConfigService],
    })
  ],
})
export class AppModule {}
