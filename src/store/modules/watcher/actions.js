export function watchersRequest() {
  return {
    type: '@watcher/WATCHERS_REQUEST',
  };
}

export function watchersSuccess(watchers) {
  return {
    type: '@watcher/WATCHERS_SUCCESS',
    payload: { watchers },
  };
}

export function watchersFailure() {
  return {
    type: '@watcher/WATCHERS_FAILURE',
  };
}

export function watchersDelete(id) {
  return {
    type: '@watcher/WATCHERS_DELETE',
    payload: { id },
  };
}

export function watchersDeleteSuccess() {
  return {
    type: '@watcher/WATCHERS_DELETE_SUCCESS',
  };
}
