import React, { useEffect } from 'react';

import * as Yup from 'yup';

import { Button, Fade } from '@material-ui/core';
import Form from 'components/Form';
import { watchersSaveRequest } from 'store/modules/watcher/actions';
import IWatcher from 'Types/IWatcher';
import { useDispatch, useSelector } from 'react-redux';
import { notificationsRequest } from 'store/modules/notifications/actions';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import INotification from 'Types/INotification';
import NotificationAutocomplete from 'components/NotificationAutocomplete';
import { useParams } from 'react-router-dom';
import Input from '../../../components/Input';
import { WatcherFormModal } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().trim().required(),
  url: Yup.string().url().trim().required(),
  delay: Yup.number().integer().min(10, 'must be greater than or equal to 10'),
  notifications: Yup.array().of(Yup.object().shape({ id: Yup.number() })),
});

interface WatcherFormProps {
  open: boolean;
  onClose: () => void;
  initialData?: IWatcher;
}

export default function WatcherForm({
  open,
  onClose,
  initialData,
}: WatcherFormProps) {
  const { projectId } = useParams();

  const dispatch = useDispatch();
  const notificationsList = useSelector<ArgosReduxStates, INotification[]>(
    (state) => state.notification.notifications
  );

  useEffect(() => {
    dispatch(notificationsRequest(projectId));
  }, [dispatch, projectId]);

  return (
    <WatcherFormModal open={open} onClose={onClose}>
      <Fade in={open}>
        <div id="watcherForm">
          <Form
            initialData={initialData}
            schema={schema}
            submitFunction={(data: IWatcher) => {
              dispatch(watchersSaveRequest(data, projectId));
            }}
          >
            <Input name="id" type="hidden" variant="outlined" />
            <Input name="name" type="text" label="Name" variant="outlined" />
            <Input name="url" type="text" label="URL" variant="outlined" />
            <Input
              name="delay"
              type="text"
              label="Interval in seconds"
              variant="outlined"
            />
            <NotificationAutocomplete
              itemList={notificationsList}
              defaultItemValue={initialData?.notifications || []}
            />
            <Button variant="contained" type="submit" color="primary">
              Save
            </Button>
          </Form>
        </div>
      </Fade>
    </WatcherFormModal>
  );
}
