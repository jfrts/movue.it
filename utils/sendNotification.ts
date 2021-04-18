interface NotificationInterface {
	body: string;
	icon: string;
}

export const sendNotification = (
	title: string,
	options: NotificationInterface
) => new Notification(title, options);
