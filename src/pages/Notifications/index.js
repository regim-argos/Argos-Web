import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledButton from '../../components/RoundButton';
import { Container } from './styles';
import NotificationList from '../../components/NotificationList';

import Loading from '~/components/Loading';

import {
  notificationsRequest,
  notificationDelete,
} from '../../store/modules/notifications/actions';

export default function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const loading = useSelector((state) => state.notification.loading);
  console.log(loading);
  useEffect(() => {
    dispatch(notificationsRequest());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(notificationDelete(id));
  }
  return (
    <>
      <Container>
        <div>
          <StyledButton />
        </div>
        <ul>
          {notifications.map((notification) => (
            <NotificationList
              key={notification.id}
              notification={notification}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      </Container>
      <Loading loading={loading} />
    </>
  );
}
