import produce from 'immer';
import IProject from 'Types/IProject';

const INITIAL_STATE = {
  projects: [],
  loading: false,
  openModal: false,
};

export interface ProjectState {
  projects: IProject[];
  openModal: boolean;
  loading: boolean;
}

interface ProjectAction {
  type: string;
  payload: {
    projects: IProject[];
    project: IProject;
  };
}
export default function project(
  state: ProjectState = INITIAL_STATE,
  action: ProjectAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@project/NOTIFICATIONS_REQUEST':
      case '@project/NOTIFICATIONS_SAVE_RESQUEST':
        draft.loading = true;
        break;
      case '@project/NOTIFICATIONS_FALIURE':
      case '@project/NOTIFICATIONS_SAVE_SUCCESS':
      case '@project/NOTIFICATIONS_SAVE_FALIURE':
        draft.loading = false;
        break;

      case '@project/NOTIFICATIONS_SUCCESS':
        draft.loading = false;
        draft.projects = action.payload.projects;
        break;
      case '@project/OPEN_MODAL':
        draft.openModal = true;
        break;
      case '@project/CLOSE_MODAL':
        draft.openModal = false;
        break;

      default:
    }
  });
}
