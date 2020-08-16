import {
  takeLatest as sagaTakelastest,
  call,
  put,
  all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

interface Action {
  payload: {
    data: {
      name: string;
      email: string;
      imageId: number;
      oldPassword: string;
    };
  };
}

const takeLatest: any = sagaTakelastest;

export function* updateProfile({ payload }: Action) {
  try {
    const { name, email, imageId, ...rest } = payload.data;

    const profile = {
      name,
      email,
      imageId,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error(err?.response?.data?.message || 'Server error');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
