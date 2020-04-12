import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import watcher from './watcher/recuder';

export default combineReducers({
  auth,
  user,
  watcher,
});
