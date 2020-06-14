import React from 'react';
import { Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Form from 'components/Form';
import SelectInput from 'components/SelectInput';
import { notificationSaveRequest } from 'store/modules/notifications/actions';
import INotification from 'Types/INotification';
import { useParams } from 'react-router-dom';
import Input from '../../../components/Input';

import { NotificationFormModal } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required().trim(),
  platform: Yup.string().required().trim(),
  platformData: Yup.object().required().shape({
    webhook: Yup.string().url().required(),
  }),
});

interface NotificationFormProps {
  open: boolean;
  onClose: () => void;
  initialData: INotification | {};
}

export default function NotificationForm({
  open,
  onClose,
  initialData,
}: NotificationFormProps) {
  const { projectId } = useParams();

  const dispatch = useDispatch();
  return (
    <NotificationFormModal open={open} onClose={onClose}>
      <div id="notificationForm">
        <Form
          initialData={initialData}
          schema={schema}
          submitFunction={(data: INotification) => {
            dispatch(notificationSaveRequest(data, projectId));
          }}
        >
          <Input name="id" type="hidden" variant="outlined" />
          <Input name="name" type="text" label="Name" variant="outlined" />
          <SelectInput
            name="platform"
            label="Platform"
            variant="outlined"
            options={[
              { label: 'Discord', value: 'DISCORD' },
              { label: 'Slack', value: 'SLACK' },
            ]}
          />

          <Input
            name="platformData.webhook"
            type="text"
            label="Webhook"
            variant="outlined"
          />
          <Button type="submit" color="primary">
            Save
          </Button>
        </Form>
      </div>
    </NotificationFormModal>
  );
}
