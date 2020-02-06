import { ServiceWorkerMessage } from '@water-reminder/api-interfaces';

export interface PostMessageEvent extends MessageEvent {
  readonly data: ServiceWorkerMessage;
}
