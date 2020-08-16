import produce from 'immer';
import IWatcher, { IWatcherDetail } from 'Types/IWatcher';

const INITIAL_STATE = {
  watchers: [],
  loading: false,
  openModal: false,
};

export interface WatcherState {
  watchers: IWatcher[];
  editWatcher?: IWatcher;
  watcherDetail?: IWatcherDetail;
  loading: boolean;
  openModal: boolean;
}

interface WatcherAction {
  type: string;
  payload: {
    watchers: IWatcher[];
    watcher: IWatcher;
    watcherDetail: IWatcherDetail;
  };
}

export default function watcher(
  state: WatcherState = INITIAL_STATE,
  action: WatcherAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@watcher/WATCHER_DETAIL_REQUEST':
      case '@watcher/WATCHERS_SAVE_RESQUEST':
      case '@watcher/WATCHERS_DELETE': {
        draft.loading = true;
        break;
      }
      case '@watcher/WATCHER_DETAIL_FAILURE':
      case '@watcher/WATCHERS_SAVE_SUCCESS':
      case '@watcher/WATCHERS_SAVE_FALIURE':
      case '@watcher/WATCHERS_DELETE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@watcher/WATCHER_DETAIL_SUCCESS': {
        draft.loading = false;
        draft.watcherDetail = action.payload.watcherDetail;
        break;
      }
      case '@watcher/OPEN_MODAL': {
        draft.openModal = true;
        draft.loading = false;
        break;
      }
      case '@watcher/CLOSE_MODAL': {
        draft.openModal = false;
        draft.loading = false;
        break;
      }

      default:
    }
  });
}
