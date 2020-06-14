import { WatcherState } from 'store/modules/watcher/reducer';
import { NotificationState } from 'store/modules/notifications/reducer';
import { AuthState } from '../store/modules/auth/reducer';
import { UserState } from '../store/modules/user/reducer';

export default interface ArgosReduxStates {
  auth: AuthState;
  user: UserState;
  watcher: WatcherState;
  notification: NotificationState;
}
