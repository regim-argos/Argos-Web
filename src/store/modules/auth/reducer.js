import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
  needConfirmEmail: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_UP_REQUEST':
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS':
      case '@auth/SIGN_UP_FAILURE':
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/FORGET_PASSWORD_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/FORGET_PASSWORD_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/FORGET_PASSWORD_FAILURE': {
        draft.loading = false;
        draft.needConfirmEmail = true;
        break;
      }
      case '@auth/FORGET_PASSWORD_PUT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/FORGET_PASSWORD_PUT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/FORGET_PASSWORD_PUT_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/CONFIRM_EMAIL_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/CONFIRM_EMAIL_SUCCESS': {
        draft.loading = false;
        draft.needConfirmEmail = false;
        break;
      }
      case '@auth/CONFIRM_EMAIL_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/CONFIRM_EMAIL_PUT_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/CONFIRM_EMAIL_PUT_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@auth/CONFIRM_EMAIL_PUT_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/CLEAN': {
        draft.loading = false;
        draft.needConfirmEmail = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
