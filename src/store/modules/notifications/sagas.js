import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  notificationSuccess,
  notificationsFaliure,
  notificationDeleteSuccess,
  notificationsRequest,
  notificationSaveSuccess,
  notificationSaveFaliure,
  notificationCloseModal,
} from './actions';

export function* getNotifications() {
  try {
    const response = yield call(api.get, 'notifications');

    yield put(notificationSuccess(response.data));
  } catch (err) {
    toast.error("Error, can't find notifications");
    yield put(notificationsFaliure());
  }
}

export function* deleteNotifications({ payload }) {
  try {
    console.log(payload);
    yield call(api.delete, `notifications/${payload.id}`);

    yield put(notificationDeleteSuccess());
    yield put(notificationsRequest());
  } catch (err) {
    toast.error("Error, can't find notifications");
    yield put(notificationsFaliure());
  }
}
export function* saveNotifications({ payload }) {
  try {
    yield call(api.post, 'notifications', payload.notification);

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
