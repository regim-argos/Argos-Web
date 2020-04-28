import React from 'react';
import { Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Form from '~/components/Form';
import Input from '../../../components/Input';

import { NotificationFormModal } from './styles';
import SelectInput from '~/components/SelectInput';
import { notificationSaveRequest } from '~/store/modules/notifications/actions';

const schema = Yup.object().shape({
  platform: Yup.string().required().trim(),
  platformData: Yup.object().required().shape({
    webhook: Yup.string().url().required(),
  }),
});

export default function NotificationForm({ open, onClose }) {
  const dispatch = useDispatch();

  return (
    <NotificationFormModal open={open} onClose={onClose}>
      <div id="notificationForm">
        <Form
          schema={schema}
          submitFunction={(data) => {
            dispatch(notificationSaveRequest(data));
            console.log(data);
          }}
        >
          {/* <Input name="id" type="hidden" variant="outlined" /> */}
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
