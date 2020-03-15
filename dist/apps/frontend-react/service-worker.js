importScripts('workbox-431/workbox-sw.js');
workbox.setConfig({
    debug: false,
    modulePathPrefix: 'workbox-431/'
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "c3f2acbc34ff78a7ae18276187e7cfe4"
  },
  {
    "url": "favicon.ico",
    "revision": "b2c4ee9d4424693b957a0dc9f7616c36"
  },
  {
    "url": "main.7c9e5a80c8d2c417b0a8.esm.js"
  },
  {
    "url": "main.f545a28da911155d4450.es5.js"
  },
  {
    "url": "polyfills.30227d99320d999f08f7.es5.js"
  },
  {
    "url": "polyfills.6dd2d2145a0f0aa35ac9.esm.js"
  },
  {
    "url": "runtime.32910608a8d36f871ae5.js"
  },
  {
    "url": "runtime.a3fbed8cb0492ae41ef6.js"
  },
  {
    "url": "vendor.129a81700c7721fc8a74.esm.js"
  },
  {
    "url": "vendor.b3b096ddf1966c5efe53.es5.js"
  },
  {
    "url": "styles.5dee61ce7f9d33882dce.css"
  },
  {
    "url": "assets/images/icon-192x192.png",
    "revision": "824c867e1f1671dd1cd6b3cf9e0c0f6a"
  },
  {
    "url": "assets/images/icon-512x512.png",
    "revision": "633cb2c53e60db8ec6d002e1771db7e1"
  },
  {
    "url": "assets/images/water-drop-24x24.png",
    "revision": "b357fb71a2b28b7170875b5901705aa7"
  },
  {
    "url": "manifest.json",
    "revision": "45c3882c3dc77814e75bf5a347758206"
  }
]);
function sendPostMessage(client, message) {
    client.postMessage(message);
}
function openNotificationHandler(client, notificationId) {
    sendPostMessage(client, {
        type: 'open-notification',
        payload: { notificationId }
    });
    sendPostMessage(client, {
        type: 'drink-dose'
    });
}
function closeNotificationHandler(client, notificationId) {
    sendPostMessage(client, {
        type: 'close-notification',
        payload: { notificationId }
    });
}
self.addEventListener('push', event => {
    const { message, notificationId } = event.data.json();
    event.waitUntil(self.registration.showNotification(message, {
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
    }));
});
self.addEventListener('notificationclose', event => {
    event.waitUntil(self.clients.matchAll({ type: 'window' }).then(clientList => {
        const activeClient = clientList.find(client => 'focus' in client);
        const { notificationId } = event.notification.data;
        if (activeClient) {
            closeNotificationHandler(activeClient, notificationId);
            return;
        }
    }));
});
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(self.clients.matchAll({ type: 'window' }).then(clientList => {
        const activeClient = clientList.find(client => 'focus' in client);
        const { notificationId } = event.notification.data;
        if (activeClient) {
            activeClient.focus();
            openNotificationHandler(activeClient, notificationId);
            return;
        }
        if (self.clients.openWindow) {
            self.clients
                .openWindow('/')
                .then(client => openNotificationHandler(client, notificationId));
        }
    }));
});
//# sourceMappingURL=service-worker.js.map