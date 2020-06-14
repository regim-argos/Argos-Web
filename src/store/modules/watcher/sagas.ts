import {
  takeLatest as sagaTakelastest,
  call,
  put,
  all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import {
  watchersSuccess,
  watchersFailure,
  watchersDeleteSuccess,
  watchersRequest,
  watchersSaveFaliure,
  watchersSaveSuccess,
  watcherCloseModal,
} from './actions';

const takeLatest: any = sagaTakelastest;

interface Action {
  payload: {
    id: number;
    projectId: number;
    watcher: {
      id: number;
    };
  };
}

export function* getWatchers({ payload: { projectId } }: Action) {
  try {
    const response = yield call(api.get, `${projectId}/watchers`);

    yield put(watchersSuccess(response.data));
  } catch (err) {
    toast.error("Error, can't find watchers");
    yield put(watchersFailure());
  }
}

export function* watchersDelete({ payload: { id, projectId } }: Action) {
  try {
    yield call(api.delete, `${projectId}/watchers/${id}`);

    yield put(watchersDeleteSuccess());
    yield put(watchersRequest(projectId));
  } catch (err) {
    toast.error("Error, can't delete this watcher");
    yield put(watchersFailure());
  }
}

export function* watchersSave({ payload: { projectId, watcher } }: Action) {
  try {
    if (watcher.id) {
      yield call(api.put, `${projectId}/watchers/${watcher.id}`, watcher);
    } else {
      yield call(api.post, `${projectId}/watchers/`, watcher);
    }

    yield put(watchersSaveSuccess());
    yield put(watcherCloseModal());
    yield put(watchersRequest(projectId));
  } catch (err) {
    toast.error(`Error, ${err.response.data.message}`);
    yield put(watchersSaveFaliure());
  }
}

export default all([
  takeLatest('@watcher/WATCHERS_REQUEST', getWatchers),
  takeLatest('@watcher/WATCHERS_SAVE_RESQUEST', watchersSave),
  takeLatest('@watcher/WATCHERS_DELETE', watchersDelete),
]);
