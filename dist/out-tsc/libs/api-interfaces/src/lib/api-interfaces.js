export var NotificationStatus;
(function (NotificationStatus) {
    NotificationStatus[NotificationStatus["closed"] = 0] = "closed";
    NotificationStatus[NotificationStatus["opened"] = 1] = "opened";
    NotificationStatus[NotificationStatus["untouched"] = 2] = "untouched";
})(NotificationStatus || (NotificationStatus = {}));
export const NOTIFICATION_STATUSES_COUNT = Object.keys(NotificationStatus).length / 2;
export var DoseVolume;
(function (DoseVolume) {
    DoseVolume[DoseVolume["cup"] = 200] = "cup";
})(DoseVolume || (DoseVolume = {}));
/**
 * Public VAPID key for push notifications.
 */
export const vapidPublicKey = 'BO0o6h3SswzEA4tJ5VOn_GJQPy16gHmq5pRfawdpslYLd967NEpKhfnw65uQvo0rOoKGupkd2C86CEemNORY4WI';
//# sourceMappingURL=api-interfaces.js.map