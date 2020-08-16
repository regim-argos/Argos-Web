import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';
import {
  watchersDelete,
  watchersSaveRequest,
  watcherOpenModal,
  watcherCloseModal,
} from 'store/modules/watcher/actions';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import IWatcher from 'Types/IWatcher';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { closeApi } from 'services/api';
import StyledButton from '../../components/RoundButton';
import WatcherList from './List';
import { Container } from './styles';

import WatcherFormModal from './WatcherForm';

export default function Watchers() {
  const { projectId } = useParams();

  const dispatch = useDispatch();
  const [editWatcher, setEditWatcher] = useState<IWatcher>();
  const open = useSelector<ArgosReduxStates, boolean>(
    (state) => state.watcher.openModal
  );

  const { data: watchers } = useSWR<IWatcher[]>(
    `${projectId}/watchers`,
    async (url) => {
      const response = await closeApi.get(url);

      return response.data;
    },
    {
      onError: () => toast.error("Error, can't find watchers"),
      refreshInterval: 10000,
    }
  );

  function handleDelete(id: number) {
    dispatch(watchersDelete(id, projectId));
  }
  function handleSave(watcher: IWatcher) {
    dispatch(watchersSaveRequest(watcher, projectId));
  }

  function handleEditWatcher(watcher: IWatcher) {
    setEditWatcher(watcher);
    dispatch(watcherOpenModal());
  }

  function closeModal() {
    dispatch(watcherCloseModal());

    setEditWatcher(undefined);
  }

  return (
    <>
      <Container>
        <div>
          <StyledButton
            text="Add"
            Icon={MdAdd}
            color="#6081F5"
            onClick={() => {
              dispatch(watcherOpenModal());
            }}
          />
        </div>
        <ul>
          {watchers?.map((watcher) => (
            <WatcherList
              key={watcher.id}
              watcher={watcher}
              handleChange={handleEditWatcher}
              handleDelete={handleDelete}
              handleSave={handleSave}
            />
          ))}
        </ul>
      </Container>

      <WatcherFormModal
        initialData={editWatcher}
        open={open}
        onClose={closeModal}
      />
    </>
  );
}
