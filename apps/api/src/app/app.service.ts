import { Injectable } from '@nestjs/common';
import { Message } from '@water-reminder/api-interfaces';

// TODO: remove
@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
}
