import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'components/Loading';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import INotification from 'Types/INotification';
import StyledButton from '../../components/RoundButton';
import { Container } from './styles';
import NotificationList from '../../components/NotificationList';

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
  const [editNotification, setNotification] = useState<INotification | {}>({});
  const notifications = useSelector<ArgosReduxStates, INotification[]>(
    (state) => state.notification.notifications
  );
  const open = useSelector<ArgosReduxStates, boolean>(
    (state) => state.notification.openModal
  );
  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.notification.loading
  );

  useEffect(() => {
    dispatch(notificationsRequest());
  }, [dispatch]);

  function handleEditNotification(notification: INotification) {
    setNotification(notification);
    dispatch(notificationOpenModal());
  }

  function handleDelete(id: number) {
    dispatch(notificationDelete(id));
  }

  function openModal() {
    dispatch(notificationOpenModal());
  }
  function closeModal() {
    dispatch(notificationCloseModal());
    setNotification({});
  }
  function handleSave(notification: INotification) {
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