import { hydrationActions } from '@react-client/store/hydration/actions';
import { store } from '@react-client/store/store';
import { DoseVolume } from '@water-reminder/api-interfaces';

export function listenPostMessages(): void {
  navigator.serviceWorker.addEventListener(
    'message',
    (event: PostMessageEvent) => {
      if (event.data.type === 'drink-dose') {
        store.dispatch(
          hydrationActions.createDose({
            time: new Date(),
            volume: DoseVolume.cup
          })
        );
      }
    }
  );
}
