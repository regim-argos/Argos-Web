import {
  takeLatest as sagaTakelastest,
  call,
  put,
  all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from 'services/api';
import {
  notificationSuccess,
  notificationsFaliure,
  notificationDeleteSuccess,
  notificationsRequest,
  notificationSaveSuccess,
  notificationSaveFaliure,
  notificationCloseModal,
} from './actions';

const takeLatest: any = sagaTakelastest;

interface Action {
  payload: {
    id: number;
    notification: {
      id: number;
    };
  };
}

export function* getNotifications() {
  try {
    const response = yield call(api.get, 'notifications');

    yield put(notificationSuccess(response.data));
  } catch (err) {
    toast.error("Error, can't find notifications");
    yield put(notificationsFaliure());
  }
}

export function* deleteNotifications({ payload }: Action) {
  try {
    yield call(api.delete, `notifications/${payload.id}`);

    yield put(notificationDeleteSuccess());
    yield put(notificationsRequest());
  } catch (err) {
    toast.error("Error, can't find notifications");
    yield put(notificationsFaliure());
  }
}
export function* saveNotifications({ payload }: Action) {
  try {
    if (payload.notification.id) {
      yield call(
        api.put,
        `notifications/${payload.notification.id}`,
        payload.notification
      );
    } else {
      yield call(api.post, 'notifications', payload.notification);
    }

    yield put(notificationSaveSuccess());
    yield put(notificationCloseModal());
    yield put(notificationsRequest());
  } catch (err) {
    toast.error("Error, can't find notifications");
    yield put(notificationSaveFaliure());
  }
}

export default all([
  takeLatest('@notification/NOTIFICATIONS_REQUEST', getNotifications),
  takeLatest('@notification/NOTIFICATIONS_DELETE', deleteNotifications),
  takeLatest('@notification/NOTIFICATIONS_SAVE_RESQUEST', saveNotifications),
]);
