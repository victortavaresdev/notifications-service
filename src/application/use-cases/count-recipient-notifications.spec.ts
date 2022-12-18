import { makeNotifications } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const CountNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotifications({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotifications({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotifications({ recipientId: 'recipient-2' }),
    );

    const { count } = await CountNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
