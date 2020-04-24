import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  notificationSuccess,
  notificationsFaliure,
  notificationDeleteSuccess,
  notificationsRequest,
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

export default all([
  takeLatest('@notification/NOTIFICATIONS_REQUEST', getNotifications),
  takeLatest('@notification/NOTIFICATIONS_DELETE', deleteNotifications),
]);
