import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('mongodbConnectionString')
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
