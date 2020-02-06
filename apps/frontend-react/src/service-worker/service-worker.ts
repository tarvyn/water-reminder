/// <reference lib="webworker" />
import { ServiceWorkerMessage } from '@water-reminder/api-interfaces';
import {} from 'workbox-sw';

declare var self: ServiceWorkerGlobalScope;

importScripts('workbox-431/workbox-sw.js');

workbox.setConfig({
  debug: false,
  modulePathPrefix: 'workbox-431/'
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([]);

function sendPostMessage(
  client: WindowClient,
  message: ServiceWorkerMessage
): void {
  client.postMessage(message);
}

function openNotificationHandler(
  client: WindowClient,
  notificationId: string
): void {
  sendPostMessage(client, {
    type: 'open-notification',
    payload: { notificationId }
  });
  sendPostMessage(client, {
    type: 'drink-dose'
  });
}

function closeNotificationHandler(
  client: WindowClient,
  notificationId: string
): void {
  sendPostMessage(client, {
    type: 'close-notification',
    payload: { notificationId }
  });
}

self.addEventListener('push', event => {
  const { message, notificationId } = event.data.json();

  event.waitUntil(
    self.registration.showNotification(message, {
      actions: [
        {
          action: 'Drink',
          icon: 'assets/images/water-drop-24x24.png',
          title: 'Drink'
        }
      ],
      vibrate: [100, 50, 100],
      badge: 'assets/images/icon-192x192.png',
      icon: 'assets/images/icon-192x192.png',
      data: { notificationId }
    })
  );
});

self.addEventListener('notificationclose', event => {
  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clientList => {
      const activeClient = clientList.find(client => 'focus' in client);
      const { notificationId } = event.notification.data;

      if (activeClient) {
        closeNotificationHandler(activeClient as WindowClient, notificationId);

        return;
      }
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();

  event.waitUntil(
    self.clients.matchAll({ type: 'window' }).then(clientList => {
      const activeClient = clientList.find(client => 'focus' in client);
      const { notificationId } = event.notification.data;

      if (activeClient) {
        (activeClient as WindowClient).focus();
        openNotificationHandler(activeClient as WindowClient, notificationId);

        return;
      }

      if (self.clients.openWindow) {
        self.clients
          .openWindow('/')
          .then(client => openNotificationHandler(client, notificationId));
      }
    })
  );
});
