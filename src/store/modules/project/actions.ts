import IProject from 'Types/IProject';

export function projectsRequest() {
  return {
    type: '@project/PROJECT_REQUEST',
  };
}

export function projectSuccess(projects: IProject[]) {
  return {
    type: '@project/PROJECT_SUCCESS',
    payload: { projects },
  };
}

export function projectsFaliure() {
  return {
    type: '@project/PROJECT_FALIURE',
  };
}

export function projectRequestOne(id: number) {
  return {
    type: '@project/PROJECT_REQUEST_ONE',
    payload: { id },
  };
}

export function projectSuccessOne(project: IProject) {
  return {
    type: '@project/PROJECT_SUCCESS_ONE',
    payload: { project },
  };
}

export function projectsFaliureOne() {
  return {
    type: '@project/PROJECT_FALIURE_ONE',
  };
}

export function projectSaveRequest(project: IProject) {
  return {
    type: '@project/PROJECT_SAVE_RESQUEST',
    payload: { project },
  };
}
export function projectSaveSuccess() {
  return {
    type: '@project/PROJECT_SAVE_SUCCESS',
  };
}
export function projectSaveFaliure() {
  return {
    type: '@project/PROJECT_SAVE_FALIURE',
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

export function memberOpenModal() {
  return {
    type: '@member/OPEN_MODAL',
  };
}

export function memberCloseModal() {
  return {
    type: '@member/CLOSE_MODAL',
  };
}

export function memberSaveRequest(email: string, projectId: number) {
  return {
    type: '@member/MEMBER_SAVE_RESQUEST',
    payload: { email, projectId },
  };
}
export function memberSaveSuccess() {
  return {
    type: '@member/MEMBER_SAVE_SUCCESS',
  };
}
export function memberSaveFaliure() {
  return {
    type: '@member/MEMBER_SAVE_FALIURE',
  };
}

export function memberRemoveRequest(email: string, projectId: number) {
  return {
    type: '@member/MEMBER_REMOVE_RESQUEST',
    payload: { email, projectId },
  };
}
export function memberRemoveSuccess() {
  return {
    type: '@member/MEMBER_REMOVE_SUCCESS',
  };
}
export function memberRemoveFaliure() {
  return {
    type: '@member/MEMBER_REMOVE_FALIURE',
  };
}
