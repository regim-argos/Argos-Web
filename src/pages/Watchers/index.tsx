import React, { useEffect, useState } from 'react';
import { MdAdd } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import {
  watchersRequest,
  watchersDelete,
  watchersSaveRequest,
  watcherOpenModal,
  watcherCloseModal,
} from 'store/modules/watcher/actions';
import Loading from 'components/Loading';
import ArgosReduxStates from 'Types/ArgosReduxStates';
import IWatcher from 'Types/IWatcher';
import StyledButton from '../../components/RoundButton';
import WatcherList from '../../components/List';
import { Container } from './styles';

import WatcherFormModal from './WatcherForm';

export default function Watchers() {
  const dispatch = useDispatch();
  const [editWatcher, setEditWatcher] = useState<IWatcher>();
  const open = useSelector<ArgosReduxStates, boolean>(
    (state) => state.watcher.openModal
  );
  const loading = useSelector<ArgosReduxStates, boolean>(
    (state) => state.watcher.loading
  );
  const watchers = useSelector<ArgosReduxStates, IWatcher[]>(
    (state) => state.watcher.watchers
  );

  useEffect(() => {
    dispatch(watchersRequest());
  }, [dispatch]);

  function handleDelete(id: number) {
    dispatch(watchersDelete(id));
  }
  function handleSave(watcher: IWatcher) {
    dispatch(watchersSaveRequest(watcher));
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
            Icon={MdAdd}
            color="#6081F5"
            onClick={() => {
              dispatch(watcherOpenModal());
            }}
          />
        </div>
        <ul>
          {watchers.map((watcher) => (
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

      <Loading loading={loading} />
      {editWatcher && (
        <WatcherFormModal
          initialData={editWatcher}
          open={open}
          onClose={closeModal}
        />
      )}
    </>
  );
}
