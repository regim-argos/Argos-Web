import React from 'react';

import * as Yup from 'yup';

import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Form from 'components/Form';
import { watchersSaveRequest } from 'store/modules/watcher/actions';
import IWatcher from 'Types/IWatcher';
import Input from '../../../components/Input';
import { WatcherFormModal } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().trim().required(),
  url: Yup.string().url().trim().required(),
  delay: Yup.number().integer().min(10, 'must be greater than or equal to 10'),
});

interface WatcherFormProps {
  open: boolean;
  onClose: () => void;
  initialData: IWatcher | {};
}

export default function WatcherForm({
  open,
  onClose,
  initialData,
}: WatcherFormProps) {
  const dispatch = useDispatch();

  return (
    <WatcherFormModal open={open} onClose={onClose}>
      <div id="watcherForm">
        <Form
          initialData={initialData}
          schema={schema}
          submitFunction={(data: IWatcher) => {
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
    </WatcherFormModal>
  );
}
