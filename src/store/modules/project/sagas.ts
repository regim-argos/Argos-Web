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
  projectSuccessOne,
  projectsFaliureOne,
  memberSaveSuccess,
  memberCloseModal,
  projectRequestOne,
  memberSaveFaliure,
} from './actions';

const takeLatest: any = sagaTakelastest;

interface Action {
  payload: {
    email: string;
    projectId: number;
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

export function* getOneProject({ payload: { id } }: Action) {
  try {
    const response = yield call(api.get, `projects/${id}`);

    yield put(projectSuccessOne(response.data));
  } catch (err) {
    toast.error("Error, can't find projects");
    yield put(projectsFaliureOne());
  }
}

export function* saveProjects({ payload }: Action) {
  try {
    if (payload.projectId) {
      yield call(api.put, `projects/${payload.projectId}`, payload.project);
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

export function* saveMember({ payload: { email, projectId } }: Action) {
  try {
    yield call(api.post, `${projectId}/projectMember`, { email });

    yield put(memberSaveSuccess());
    yield put(memberCloseModal());
    yield put(projectRequestOne(projectId));
  } catch (err) {
    toast.error("Error, can't find projects");
    yield put(memberSaveFaliure());
  }
}

export function* removeMember({ payload: { email, projectId } }: Action) {
  try {
    console.log(email);

    yield call(api.delete, `${projectId}/projectMember`, { data: { email } });

    yield put(memberSaveSuccess());
    yield put(memberCloseModal());
    yield put(projectRequestOne(projectId));
  } catch (err) {
    toast.error("Error, can't find projects");
    yield put(memberSaveFaliure());
  }
}

export default all([
  takeLatest('@project/PROJECT_REQUEST', getProjects),
  takeLatest('@member/MEMBER_SAVE_RESQUEST', saveMember),
  takeLatest('@member/MEMBER_REMOVE_RESQUEST', removeMember),
  takeLatest('@project/PROJECT_REQUEST_ONE', getOneProject),
  takeLatest('@project/PROJECT_SAVE_RESQUEST', saveProjects),
]);
