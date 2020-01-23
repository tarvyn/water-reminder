import { ConfigModule } from '@api/config/config.module';
import { ConfigService } from '@api/config/config.service';
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { HydrationModule } from './hydration/hydration.module';
import { ReminderModule } from './reminder/reminder.module';

@Module({
  imports: [
    AuthModule,
    HydrationModule,
    ReminderModule,
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
