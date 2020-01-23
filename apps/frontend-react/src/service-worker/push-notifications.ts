import { pushSubscriptionApiConnector } from '@react-client/api-connectors/push-subscription.api-connector';
import { urlBase64ToUint8Array } from '@react-client/shared/utilities/base64-to-unit8-array';
import { vapidPublicKey } from '@water-reminder/api-interfaces';

export const getPushSubscription = async (): Promise<PushSubscription> => {
  const notificationPermissionResult = await Notification.requestPermission();

  if (notificationPermissionResult !== 'granted') {
    return;
  }

  const sw = await navigator.serviceWorker.ready;
  const applicationServerKey = urlBase64ToUint8Array(vapidPublicKey);

  return await sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey
  });
};

export const actualizePushSubscription = async (): Promise<void> => {
  const subscription = await getPushSubscription();

  if (subscription === null) {
    throw new Error('Not subscribed to push service!');
  } else {
    return await pushSubscriptionApiConnector
      .sendSubscription(subscription)
      .toPromise();
  }
};
