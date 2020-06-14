import {
  takeLatest as sagaTakelastest,
  call,
  put,
  all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import {
  projectSuccess,
  projectsFaliure,
  projectSaveSuccess,
  projectsRequest,
  projectSaveFaliure,
} from './actions';

const takeLatest: any = sagaTakelastest;

interface Action {
  payload: {
    id: number;
    project: {
      id: number;
    };
  };
}

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');

    yield put(projectSuccess(response.data));
  } catch (err) {
    toast.error("Error, can't find projects");
    yield put(projectsFaliure());
  }
}

export function* saveProjects({ payload }: Action) {
  try {
    if (payload.project.id) {
      yield call(api.put, `projects/${payload.project.id}`, payload.project);
    } else {
      yield call(api.post, 'projects', payload.project);
    }

    yield put(projectSaveSuccess());
    yield put(projectsRequest());
  } catch (err) {
    toast.error("Error, can't find projects");
    yield put(projectSaveFaliure());
  }
}

export default all([
  takeLatest('@project/NOTIFICATIONS_REQUEST', getProjects),
  takeLatest('@project/NOTIFICATIONS_SAVE_RESQUEST', saveProjects),
]);
