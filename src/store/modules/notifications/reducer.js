import produce from 'immer';

const INITIAL_STATE = {
  notifications: [],
  loading: false,
  openModal: false,
};
export default function notification(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@notification/NOTIFICATIONS_REQUEST':
      case '@notification/NOTIFICATIONS_DELETE':
      case '@notification/NOTIFICATIONS_SAVE_RESQUEST':
        draft.loading = true;
        break;
      case '@notification/NOTIFICATIONS_FALIURE':
      case '@notification/NOTIFICATIONS_DELETE_SUCCESS':
      case '@notification/NOTIFICATIONS_SAVE_SUCCESS':
      case '@notification/NOTIFICATIONS_SAVE_FALIURE':
        draft.loading = false;
        break;

      case '@notification/NOTIFICATIONS_SUCCESS':
        draft.loading = false;
        draft.notifications = action.payload.notifications;
        break;

      case '@notification/OPEN_MODAL':
        draft.openModal = true;
        break;
      case '@notification/CLOSE_MODAL':
        draft.openModal = false;
        break;

      default:
    }
  });
}
