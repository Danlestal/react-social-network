import { injectable } from "inversify"
import { INotificationService } from "src/core/services"
import { Notification } from "src/core/domain/notifications"

@injectable()
export class NotificationService implements INotificationService {
  addNotification: (notification: Notification) => Promise<void>;
  getNotifications: (userId: string, callback: (resultNotifications: { [notifyId: string]:Notification; }) => void) => any;
  deleteNotification: (notificationId: string, userId: string) => Promise<void>;
  setSeenNotification: (notificationId: string, userId: string, notification: Notification) => Promise<void>;
}
