import React, { useEffect } from 'react';

import * as Yup from 'yup';

import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../components/Input';
import NotificationAutocomplete from '../../../components/NotificationAutocomplete';
import { WatcherFormModal } from './styles';
import Form from '~/components/Form';
import { notificationsRequest } from '~/store/modules/notifications/actions';
import { watchersSaveRequest } from '~/store/modules/watcher/actions';

const schema = Yup.object().shape({
  name: Yup.string().trim().required(),
  url: Yup.string().url().trim().required(),
  delay: Yup.number().integer().min(10, 'must be greater than or equal to 10'),
  notifications: Yup.array().of(Yup.object().shape({ id: Yup.number() })),
});

export default function WatcherForm({ open, onClose, initialData }) {
  const dispatch = useDispatch();
  const notificationsList = useSelector(
    (state) => state.notification.notifications
  );

  useEffect(() => {
    dispatch(notificationsRequest());
  }, [dispatch]);

  return (
    <WatcherFormModal open={open} onClose={onClose}>
      <div id="watcherForm">
        <Form
          initialData={initialData}
          schema={schema}
          submitFunction={(data) => {
            dispatch(watchersSaveRequest(data));
          }}
        >
          <Input name="id" type="hidden" variant="outlined" />
          <Input name="name" type="text" label="Name" variant="outlined" />
          <Input name="url" type="text" label="URL" variant="outlined" />
          <Input name="delay" type="text" label="Interval" variant="outlined" />
          <NotificationAutocomplete itemList={notificationsList} />
          <Button type="submit" color="primary">
            Save
          </Button>
        </Form>
      </div>
    </WatcherFormModal>
  );
}
