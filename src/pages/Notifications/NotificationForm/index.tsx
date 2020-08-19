import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Form from 'components/Form';
import SelectInput from 'components/SelectInput';
import { notificationSaveRequest } from 'store/modules/notifications/actions';
import INotification from 'Types/INotification';
import { useParams } from 'react-router-dom';
import { FormHandles } from '@unform/core';
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

  const form = useRef<FormHandles>(null);

  function functionThatGetsData() {
    // Get all data
    return form?.current?.getData();
  }

  const [data, setData] = useState<INotification | undefined>(
    initialData as INotification
  );

  useEffect(() => setData(initialData as INotification), [initialData]);

  return (
    <NotificationFormModal open={open} onClose={onClose}>
      <div id="notificationForm">
        <Form
          form={form}
          initialData={initialData}
          schema={schema}
          onChange={() => {
            setData(functionThatGetsData() as INotification);
          }}
          submitFunction={(e: INotification) => {
            dispatch(notificationSaveRequest(e, projectId));
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

          {data?.platform && (
            <>
              <Input
                name="platformData.webhook"
                type="text"
                label="Webhook"
                variant="outlined"
              />
              {data?.platform === 'SLACK' && (
                <>
                  <span> or </span>
                  <a
                    href={`https://slack.com/oauth/v2/authorize?scope=incoming-webhook&client_id=1050145130676.1051039952901&redirect_uri=https://projectargos.tech/project/${projectId}/notification/slack${
                      data?.id ? `/${data?.id}` : ''
                    }?name=${data?.name}&code=`}
                  >
                    <img
                      alt="Add to Slack"
                      height="40"
                      width="139"
                      src="https://platform.slack-edge.com/img/add_to_slack.png"
                      srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
                    />
                  </a>
                </>
              )}
            </>
          )}
          <Button variant="contained" type="submit" color="primary">
            Save
          </Button>
        </Form>
      </div>
    </NotificationFormModal>
  );
}
