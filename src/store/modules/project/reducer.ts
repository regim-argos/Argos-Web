import produce from 'immer';
import IProject from 'Types/IProject';

const INITIAL_STATE = {
  projects: [],
  loading: false,
  openModal: false,
  memberOpenModal: false,
};

export interface ProjectState {
  projects: IProject[];
  openModal: boolean;
  loading: boolean;
  memberOpenModal: boolean;
  currentProject?: IProject;
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
      case '@project/PROJECT_REQUEST':
      case '@project/PROJECT_REQUEST_ONE':
      case '@project/PROJECT_SAVE_RESQUEST':
      case '@member/MEMBER_SAVE_RESQUEST':
      case '@member/MEMBER_REMOVE_RESQUEST':
        draft.loading = true;
        break;
      case '@project/PROJECT_FALIURE':
      case '@project/PROJECT_SAVE_SUCCESS':
      case '@project/PROJECT_SAVE_FALIURE':
      case '@project/PROJECT_FALIURE_ONE':
      case '@member/MEMBER_SAVE_SUCCESS':
      case '@member/MEMBER_SAVE_FALIURE':
      case '@member/MEMBER_REMOVE_SUCCESS':
      case '@member/MEMBER_REMOVE_FALIURE':
        draft.loading = false;
        break;
      case '@project/PROJECT_SUCCESS_ONE':
        draft.loading = false;
        draft.currentProject = action.payload.project;
        break;
      case '@project/PROJECT_SUCCESS':
        draft.loading = false;
        draft.projects = action.payload.projects;
        break;
      case '@project/OPEN_MODAL':
        draft.openModal = true;
        break;
      case '@project/CLOSE_MODAL':
        draft.openModal = false;
        break;
      case '@member/OPEN_MODAL':
        draft.memberOpenModal = true;
        break;
      case '@member/CLOSE_MODAL':
        draft.memberOpenModal = false;
        break;

      default:
    }
  });
}
