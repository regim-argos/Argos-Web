import IWatcher from 'Types/IWatcher';

export function watchersRequest(projectId: number) {
  return {
    type: '@watcher/WATCHERS_REQUEST',
    payload: { projectId },
  };
}

export function watchersSuccess(watchers: IWatcher[]) {
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

export function watchersDelete(id: number, projectId: number) {
  return {
    type: '@watcher/WATCHERS_DELETE',
    payload: { id, projectId },
  };
}

export function watchersDeleteSuccess() {
  return {
    type: '@watcher/WATCHERS_DELETE_SUCCESS',
  };
}

export function watchersSaveRequest(watcher: IWatcher, projectId: number) {
  return {
    type: '@watcher/WATCHERS_SAVE_RESQUEST',
    payload: { watcher, projectId },
  };
}
export function watchersSaveSuccess() {
  return {
    type: '@watcher/WATCHERS_SAVE_SUCCESS',
  };
}

export function watchersSaveFaliure() {
  return {
    type: '@watcher/WATCHERS_SAVE_FALIURE',
  };
}

export function watcherOpenModal() {
  return {
    type: '@watcher/OPEN_MODAL',
  };
}

export function watcherCloseModal() {
  return {
    type: '@watcher/CLOSE_MODAL',
  };
}
