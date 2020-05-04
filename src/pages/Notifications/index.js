import React, { useEffect, useState } from 'react';
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
  notificationSaveRequest,
} from '../../store/modules/notifications/actions';

export default function Notifications() {
  const dispatch = useDispatch();
  const [editNotification, setNotification] = useState({});
  const notifications = useSelector(
    (state) => state.notification.notifications
  );
  const open = useSelector((state) => state.notification.openModal);
  const loading = useSelector((state) => state.notification.loading);

  useEffect(() => {
    dispatch(notificationsRequest());
  }, [dispatch]);

  function handleEditNotification(notification) {
    setNotification(notification);
    dispatch(notificationOpenModal());
  }

  function handleDelete(id) {
    dispatch(notificationDelete(id));
  }

  function openModal() {
    dispatch(notificationOpenModal());
  }
  function closeModal() {
    dispatch(notificationCloseModal());
    setNotification({});
  }
  function handleSave(notification) {
    dispatch(notificationSaveRequest(notification));
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
              handleSave={handleSave}
              handleEditNotification={handleEditNotification}
            />
          ))}
        </ul>
      </Container>
      <Loading loading={loading} />
      <NotificationFormModal
        initialData={editNotification}
        open={open}
        onClose={closeModal}
      />
    </>
  );
}
