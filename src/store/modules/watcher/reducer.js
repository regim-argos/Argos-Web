import produce from 'immer';

const INITIAL_STATE = {
  watchers: [],
  loading: false,
};

export default function watcher(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@watcher/WATCHERS_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@watcher/WATCHERS_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@watcher/WATCHERS_SUCCESS': {
        draft.loading = false;
        draft.watchers = action.payload.watchers;
        break;
      }
      case '@watcher/WATCHERS_DELETE': {
        draft.loading = true;
        break;
      }
      case '@watcher/WATCHERS_DELETE_SUCCESS': {
        draft.loading = false;

        break;
      }
      default:
    }
  });
}
