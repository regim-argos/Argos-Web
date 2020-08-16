import {
  takeLatest as sagaTakelastest,
  call,
  put,
  all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { mutate } from 'swr';

import api from 'services/api';
import {
  watchersDeleteSuccess,
  watchersSaveFaliure,
  watchersSaveSuccess,
  watcherCloseModal,
  watcherDetailFailure,
  watcherDetailSuccess,
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

export function* getWatcherDetail({ payload: { projectId, id } }: Action) {
  try {
    const response = yield call(api.get, `${projectId}/watchersDetail/${id}`);

    yield put(watcherDetailSuccess(response.data));
  } catch (err) {
    toast.error(err?.response?.data?.message || 'Server error');
    yield put(watcherDetailFailure());
  }
}

export function* watchersDelete({ payload: { id, projectId } }: Action) {
  try {
    yield call(api.delete, `${projectId}/watchers/${id}`);

    yield put(watchersDeleteSuccess());
    mutate(`${projectId}/watchers`);
  } catch (err) {
    toast.error(err?.response?.data?.message || 'Server error');
    yield put(watchersSaveFaliure());
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
    mutate(`${projectId}/watchers`);
  } catch (err) {
    toast.error(err?.response?.data?.message || 'Server error');
    yield put(watchersSaveFaliure());
  }
}

export default all([
  takeLatest('@watcher/WATCHER_DETAIL_REQUEST', getWatcherDetail),
  takeLatest('@watcher/WATCHERS_SAVE_RESQUEST', watchersSave),
  takeLatest('@watcher/WATCHERS_DELETE', watchersDelete),
]);
