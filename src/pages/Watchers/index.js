import React, { useEffect } from 'react';
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
} from '~/store/modules/watcher/actions';
import Loading from '~/components/Loading';

export default function Watchers() {
  const dispatch = useDispatch();

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
              <StyledButton Icon={MdAdd} color="#6081F5" />
            </div>
            <ul>
              {watchers.map((watcher) => (
                <WatcherList
                  key={watcher.id}
                  watcher={watcher}
                  handleDelete={handleDelete}
                  handleSave={handleSave}
                />
              ))}
            </ul>
          </PerfectScrollbar>
        </div>
      </Container>
      <Loading loading={loading} />
    </>
  );
}
