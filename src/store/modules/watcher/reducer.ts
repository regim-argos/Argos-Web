import produce from 'immer';
import IWatcher from 'Types/IWatcher';

const INITIAL_STATE = {
  watchers: [],
  loading: false,
  openModal: false,
};

export interface WatcherState {
  watchers: IWatcher[];
  editWatcher?: IWatcher;
  loading: boolean;
  openModal: boolean;
}

interface WatcherAction {
  type: string;
  payload: {
    watchers: IWatcher[];
    watcher: IWatcher;
  };
}

export default function watcher(
  state: WatcherState = INITIAL_STATE,
  action: WatcherAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@watcher/WATCHERS_REQUEST':
      case '@watcher/WATCHERS_SAVE_RESQUEST':
      case '@watcher/WATCHERS_DELETE': {
        draft.loading = true;
        break;
      }
      case '@watcher/WATCHERS_FAILURE':
      case '@watcher/WATCHERS_SAVE_SUCCESS':
      case '@watcher/WATCHERS_SAVE_FALIURE':
      case '@watcher/WATCHERS_DELETE_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@watcher/WATCHERS_SUCCESS': {
        draft.loading = false;
        draft.watchers = action.payload.watchers;
        break;
      }
      case '@watcher/OPEN_MODAL': {
        draft.openModal = true;
        break;
      }
      case '@watcher/CLOSE_MODAL': {
        draft.openModal = false;
        break;
      }

      default:
    }
  });
}