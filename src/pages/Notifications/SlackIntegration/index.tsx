import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from 'components/Loading';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import { useParams, useHistory } from 'react-router-dom';
import {
  notificationsRequest,
  notificationOpenModal,
  notificationCloseModal,
} from 'store/modules/notifications/actions';
import qs from 'qs';
import Axios from 'axios';
import { Container } from './styles';

import NotificationFormModal from '../NotificationForm';

export default function SlackIntegration(prop: any) {
  const history = useHistory();
  const { projectId, notificationId } = useParams();

  const [code, setCode] = useState<string | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [url, setUrl] = useState<string | undefined>();

  const getWebHookUrlCallBack = useCallback(async () => {
    if (code && name) {
      const response = await Axios.get<{ incoming_webhook: { url: string } }>(
        'https://slack.com/api/oauth.v2.access',
        {
          params: {
            pretty: 1,
            code,
            client_id: '1050145130676.1051039952901',
            client_secret: '044b29d4af0a097eda64f526732baf95',
            redirect_uri: `https://projectargos.tech/project/${projectId}/notification/slack${
              notificationId ? `/${notificationId}` : ''
            }?name=${name}`,
          },
        }
      );
      setUrl(response.data?.incoming_webhook?.url);
    }
  }, [code, name, notificationId, projectId]);

  useEffect(() => {
    const { name: nameQs, code: codeQs } = qs.parse(
      prop.location.search.substring(1)
    ) as { name: string; code: string };
    setCode(codeQs);
    setName(nameQs);
    getWebHookUrlCallBack();
  }, [getWebHookUrlCallBack, prop.location]);

  const dispatch = useDispatch();

  const open = useSelector<ArgosReduxStates, boolean>(
    (state) => state.notification.openModal
  );
  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.notification.loading
  );

  useEffect(() => {
    dispatch(notificationsRequest(projectId));
  }, [dispatch, projectId]);

  function openModal() {
    dispatch(notificationOpenModal());
  }

  function closeModal() {
    dispatch(notificationCloseModal());
    history.push(`/project/${projectId}/notification`);
  }

  useEffect(() => {
    if (url) {
      openModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <>
      <Container>
        <span>Loading...</span>
      </Container>
      <Loading loading={loading} />
      <NotificationFormModal
        initialData={{
          id: notificationId,
          platform: 'SLACK',
          name,
          platformData: { webhook: url },
        }}
        open={open}
        onClose={closeModal}
      />
    </>
  );
}
