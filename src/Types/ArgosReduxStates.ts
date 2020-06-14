import { WatcherState } from 'store/modules/watcher/reducer';
import { NotificationState } from 'store/modules/notifications/reducer';
import { ProjectState } from 'store/modules/project/reducer';
import { AuthState } from '../store/modules/auth/reducer';
import { UserState } from '../store/modules/user/reducer';

export default interface ArgosReduxStates {
  auth: AuthState;
  user: UserState;
  project: ProjectState;
  watcher: WatcherState;
  notification: NotificationState;
}
