import { AppController } from '@api/app/app.controller';
import { AppService } from '@api/app/app.service';
import { ConfigModule } from '@api/config/config.module';
import { ConfigService } from '@api/config/config.service';
import { Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { AuthModule } from '@api/auth/auth.module';

@Module({
  imports: [
    AuthModule,
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
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
