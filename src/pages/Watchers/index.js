import React, { useEffect, useState } from 'react';
import { MdExitToApp, MdAdd } from 'react-icons/md';

import PerfectScrollbar from 'react-perfect-scrollbar';
import { useDispatch, useSelector } from 'react-redux';
import StyledButton from '../../components/RoundButton';
import WatcherList from '../../components/List';
import { Container } from './styles';
import {
  watchersRequest,
  watchersDelete,
  watchersSaveRequest,
  watcherOpenModal,
  watcherCloseModal,
} from '~/store/modules/watcher/actions';
import Loading from '~/components/Loading';

import ModalContainer from './WatcherForm';

export default function Watchers() {
  const dispatch = useDispatch();
  const [editWatcher, setEditWatcher] = useState({});
  const open = useSelector((state) => state.watcher.openModal);
  const loading = useSelector((state) => state.watcher.loading);
  const watchers = useSelector((state) => state.watcher.watchers);

  useEffect(() => {
    dispatch(watchersRequest());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(watchersDelete(id));
  }
  function handleSave(watcher) {
    dispatch(watchersSaveRequest(watcher));
  }

  function handleEditWatcher(watcher) {
    setEditWatcher(watcher);
    dispatch(watcherOpenModal());
  }

  function closeModal() {
    dispatch(watcherCloseModal());

    setEditWatcher({});
  }

  return (
    <>
      <Container>
        <div>
          <nav>
            <h1>Argos</h1>
            <StyledButton Icon={MdExitToApp} color="#C5474B" />
          </nav>
          <PerfectScrollbar>
            <div>
              <StyledButton
                Icon={MdAdd}
                color="#6081F5"
                onClick={() => dispatch(watcherOpenModal())}
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
          </PerfectScrollbar>
        </div>
      </Container>
      <Loading loading={loading} />
      <ModalContainer
        initialData={editWatcher}
        open={open}
        onClose={closeModal}
      />
    </>
  );
}
