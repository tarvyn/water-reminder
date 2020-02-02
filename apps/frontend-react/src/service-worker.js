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
                icon: 'assets/images/water-drop-24x24.png',
                title: 'Drink'
            }
        ],
        vibrate: [100, 50, 100],
        badge: 'assets/images/icon-192x192.png',
        icon: 'assets/images/icon-192x192.png',
    }));
});
function sendDrinkMessage(client) {
    client.postMessage({
        type: 'drink-dose'
    });
}
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(self.clients.matchAll({ type: 'window' })
        .then(clientList => {
        const activeClient = clientList.find(client => 'focus' in client);
        if (activeClient) {
            activeClient.focus();
            sendDrinkMessage(activeClient);
            return;
        }
        if (self.clients.openWindow) {
            self.clients.openWindow('/').then(sendDrinkMessage);
            return;
        }
    }));
});
//# sourceMappingURL=service-worker.js.map