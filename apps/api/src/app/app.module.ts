import { ConfigModule } from '@api/config/config.module';
import { ConfigService } from '@api/config/config.service';
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AuthModule } from '@api/auth/auth.module';
import { ReminderModule } from '../reminder/reminder.module';

@Module({
  imports: [
    AuthModule,
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
