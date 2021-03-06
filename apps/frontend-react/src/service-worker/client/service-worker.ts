import { catchPromiseError } from '@water-reminder/utils';
import { Workbox } from 'workbox-window';
import { listenPostMessages } from './post-messages';

export const registerServiceWorker = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }

  const wb = new Workbox('service-worker.js');

  wb.addEventListener('activated', (event) => {
    if (!event.isUpdate) {
      console.log('Service worker activated for the first time!');
    } else {
      console.log('Service worker activated!');
    }
  });

  wb.addEventListener('waiting', (event) => {
    console.log(`A new service worker has installed, but it can't activate` +
      `until all tabs running the current version have fully unloaded.`);
  });

  wb.addEventListener('installed', (event) => {
    if (!event.isUpdate) {
      console.log('Service worker installed for the first time');
    } else {
      console.log('Service worker installed');
    }
  });

  const [registrationError] = await catchPromiseError(wb.register());

  if (registrationError) {
    console.log('Service worker registration error', registrationError);
  }

  listenPostMessages();
};
