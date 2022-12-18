import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotifications(override: Override = {}) {
  return new Notification({
    content: new Content('conteúdo'),
    category: 'social',
    recipientId: 'recipient-1',
    ...override,
  });
}
