import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StyledButton from '../../components/RoundButton';
import { Container } from './styles';
import NotificationList from '../../components/NotificationList';

import Loading from '~/components/Loading';
import NotificationFormModal from './NotificationForm';
import {
  notificationsRequest,
  notificationDelete,
  notificationOpenModal,
  notificationCloseModal,
} from '../../store/modules/notifications/actions';

export default function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const open = useSelector((state) => state.notification.openModal);
  const loading = useSelector((state) => state.notification.loading);

  useEffect(() => {
    dispatch(notificationsRequest());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(notificationDelete(id));
  }

  function openModal() {
    dispatch(notificationOpenModal());
  }
  function closeModal() {
    dispatch(notificationCloseModal());
  }

  return (
    <>
      <Container>
        <div>
          <StyledButton onClick={() => openModal()} />
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
      <NotificationFormModal open={open} onClose={closeModal} />
    </>
  );
}
