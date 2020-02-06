import { notificationApiConnector } from '@react-client/api-connectors/notification.api-connector';
import { PostMessageEvent } from '@react-client/shared/types/message';
import { hydrationActions } from '@react-client/store/hydration/actions';
import { store } from '@react-client/store/store';
import {
  DoseVolume,
  NotificationStatus
} from '@water-reminder/api-interfaces';

export function listenPostMessages(): void {
  navigator.serviceWorker.addEventListener(
    'message',
    (event: PostMessageEvent) => {
      switch (event.data.type) {
        case 'drink-dose':
          return store.dispatch(
            hydrationActions.createDose({
              time: new Date(),
              volume: DoseVolume.cup
            })
          );
        case 'open-notification':
          return notificationApiConnector.updateStatus(
            event.data.payload.notificationId,
            NotificationStatus.opened
          ).subscribe();
        case 'close-notification':
          return notificationApiConnector.updateStatus(
            event.data.payload.notificationId,
            NotificationStatus.closed
          ).subscribe();
      }
    }
  );
}
