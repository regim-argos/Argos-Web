import produce from 'immer';
import IUser from 'Types/IUser';
import IProject from 'Types/IProject';

const INITIAL_STATE = {
  profile: null,
  loading: false,
};

export interface UserState {
  profile: IUser | null;
  loading: boolean;
  isOwner?: boolean;
}

interface UserAction {
  type: string;
  payload: {
    user: IUser | null;
    profile: IUser | null;
    project: IProject;
  };
}

export default function user(
  state: UserState = INITIAL_STATE,
  action: UserAction
) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@project/PROJECT_SUCCESS_ONE': {
        draft.isOwner = false;
        const find = action.payload.project?.members.find(
          (member) =>
            member.userId === draft.profile?.id && member.role === 'OWNER'
        );
        if (find) draft.isOwner = true;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
