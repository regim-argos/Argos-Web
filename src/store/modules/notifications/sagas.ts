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
    projectId: number;
    notification: {
      id: number;
    };
  };
}

export function* getNotifications({ payload: { projectId } }: Action) {
  try {
    const response = yield call(api.get, `${projectId}/notifications`);

    yield put(notificationSuccess(response.data));
  } catch (err) {
    toast.error("Error, can't find notifications");
    yield put(notificationsFaliure());
  }
}

export function* deleteNotifications({ payload: { id, projectId } }: Action) {
  try {
    yield call(api.delete, `${projectId}/notifications/${id}`);

    yield put(notificationDeleteSuccess());
    yield put(notificationsRequest(projectId));
  } catch (err) {
    toast.error("Error, can't find notifications");
    yield put(notificationsFaliure());
  }
}
export function* saveNotifications({
  payload: { projectId, notification },
}: Action) {
  try {
    if (notification.id) {
      yield call(
        api.put,
        `${projectId}/notifications/${notification.id}`,
        notification
      );
    } else {
      yield call(api.post, `${projectId}/notifications`, notification);
    }

    yield put(notificationSaveSuccess());
    yield put(notificationCloseModal());
    yield put(notificationsRequest(projectId));
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
