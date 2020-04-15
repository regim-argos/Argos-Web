import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  watchersSuccess,
  watchersFailure,
  watchersDeleteSuccess,
  watchersRequest,
  watchersSaveFaliure,
  watchersSaveSuccess,
  watcherCloseModal,
} from './actions';

export function* getWatchers() {
  try {
    const response = yield call(api.get, 'watchers');

    yield put(watchersSuccess(response.data));
  } catch (err) {
    toast.error("Error, can't find watchers");
    yield put(watchersFailure());
  }
}

export function* watchersDelete({ payload }) {
  try {
    yield call(api.delete, `watchers/${payload.id}`);

    yield put(watchersDeleteSuccess());
    yield put(watchersRequest());
  } catch (err) {
    toast.error("Error, can't delete");
    yield put(watchersFailure());
  }
}

export function* watchersSave({ payload }) {
  try {
    if (payload.watcher.id) {
      yield call(api.put, `watchers/${payload.watcher.id}`, payload.watcher);
    } else {
      yield call(api.post, `watchers`, payload.watcher);
    }

    yield put(watchersSaveSuccess());
    yield put(watcherCloseModal());
    yield put(watchersRequest());
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
