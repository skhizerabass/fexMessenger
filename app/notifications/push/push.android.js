import { NotificationsAndroid, PendingNotifications } from 'react-native-notifications';

class PushNotification {
	constructor() {
		this.onRegister = null;
		this.onNotification = null;
		this.deviceToken = null;

		NotificationsAndroid.setRegistrationTokenUpdateListener((deviceToken) => {
			this.deviceToken = deviceToken;
			console.warn(deviceToken);
		});

		NotificationsAndroid.setNotificationOpenedListener((notification) => {
			this.onNotification(notification);
		});
	}

	getDeviceToken() {
		console.count(this.deviceToken)
		return this.deviceToken;
	}

	setBadgeCount = () => {}

	configure(params) {
		this.onRegister = params.onRegister;
		this.onNotification = params.onNotification;
		NotificationsAndroid.refreshToken();
		return PendingNotifications.getInitialNotification();
	}
}

export default new PushNotification();
