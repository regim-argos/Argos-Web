import React, { useEffect } from 'react';

import * as Yup from 'yup';

import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Input from '../../../components/Input';
import { ModalContainer } from './styles';
import Form from '~/components/Form';
import { watchersSaveRequest } from '~/store/modules/watcher/actions';

const schema = Yup.object().shape({
  id: Yup.number().integer(),
  name: Yup.string().trim().required(),
  url: Yup.string().url().trim().required(),
  delay: Yup.number().integer().min(10, 'must be greater than or equal to 10'),
});

export default function WatcherForm({ open, onClose, initialData }) {
  useEffect(() => console.log(initialData), [initialData]);
  const dispatch = useDispatch();

  return (
    <ModalContainer open={open} onClose={onClose}>
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
          <Button type="submit" color="primary">
            Save
          </Button>
        </Form>
      </div>
    </ModalContainer>
  );
}
