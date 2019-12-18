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

  event.waitUntil(
    self.registration.showNotification(title)
  );
});
