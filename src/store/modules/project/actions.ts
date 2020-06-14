import IProject from 'Types/IProject';

export function projectsRequest() {
  return {
    type: '@project/NOTIFICATIONS_REQUEST',
  };
}

export function projectSuccess(projects: IProject[]) {
  return {
    type: '@project/NOTIFICATIONS_SUCCESS',
    payload: { projects },
  };
}

export function projectsFaliure() {
  return {
    type: '@project/NOTIFICATIONS_FALIURE',
  };
}

export function projectSaveRequest(project: IProject) {
  return {
    type: '@project/NOTIFICATIONS_SAVE_RESQUEST',
    payload: { project },
  };
}
export function projectSaveSuccess() {
  return {
    type: '@project/NOTIFICATIONS_SAVE_SUCCESS',
  };
}
export function projectSaveFaliure() {
  return {
    type: '@project/NOTIFICATIONS_SAVE_FALIURE',
  };
}

export function projectOpenModal() {
  return {
    type: '@project/OPEN_MODAL',
  };
}

export function projectCloseModal() {
  return {
    type: '@project/CLOSE_MODAL',
  };
}
