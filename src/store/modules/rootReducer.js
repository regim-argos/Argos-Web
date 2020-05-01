import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import watcher from './watcher/reducer';
import notification from './notifications/reducer';

export default combineReducers({
  auth,
  user,
  watcher,
  notification,
});
