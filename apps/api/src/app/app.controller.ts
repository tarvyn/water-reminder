import { AppService } from '@api/app/app.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Message } from '@water-reminder/api-interfaces';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(@Req() req: Request): Message {
    return this.appService.getData();
  }
}
