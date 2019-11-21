import { Controller, Get, Req, Res } from '@nestjs/common';
import { Message } from '@water-reminder/api-interfaces';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(@Req() req: Request): Message {
    console.log('cookies', JSON.stringify(req.cookies));

    return this.appService.getData();
  }
}
