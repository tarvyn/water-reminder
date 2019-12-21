importScripts('workbox-431/workbox-sw.js');
workbox.setConfig({
    debug: false,
    modulePathPrefix: 'workbox-431/'
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute([]);
self.addEventListener('push', (event) => {
    const title = event.data.text();
    event.waitUntil(self.registration.showNotification(title, {
        actions: [
            {
                action: 'Drink',
                icon: 'assets/images/icon-192x192.png',
                title: 'Time to drink water'
            }
        ],
        vibrate: [500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170, 40, 500],
        badge: 'assets/images/icon-192x192.png',
        icon: 'assets/images/icon-192x192.png',
        body: 'Time to start drinking water systematically'
    }));
});
self.addEventListener('notificationclick', event => {
    console.log('On notification click: ', event.notification.tag);
    event.notification.close();
    // This looks to see if the current is already open and
    // focuses if it is
    event.waitUntil(self.clients.matchAll({ type: 'window' })
        .then(clientList => {
        console.log('clientList', clientList);
        const activeClient = clientList.find(client => 'focus' in client);
        if (activeClient) {
            return activeClient.focus();
        }
        if (self.clients.openWindow) {
            return self.clients.openWindow('/sign-in');
        }
    }));
});
//# sourceMappingURL=service-worker.js.map