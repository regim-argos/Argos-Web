import React from 'react';
import { Button } from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Form from '~/components/Form';
import Input from '../../../components/Input';

import { NotificationFormModal } from './styles';
import SelectInput from '~/components/SelectInput';

export default function NotificationForm({ open, onClose }) {
  return (
    <NotificationFormModal open={open} onClose={onClose}>
      <div id="notificationForm">
        <Form
          submitFunction={(data) => {
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
