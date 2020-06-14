import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import watcher from './watcher/sagas';

import notification from './notifications/sagas';

export default function* rootSaga() {
  return yield all([auth, user, watcher, notification]);
}
