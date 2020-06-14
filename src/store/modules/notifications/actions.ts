import INotification from 'Types/INotification';

export function notificationsRequest(projectId: number) {
  return {
    type: '@notification/NOTIFICATIONS_REQUEST',
    payload: { projectId },
  };
}

export function notificationSuccess(notifications: INotification[]) {
  return {
    type: '@notification/NOTIFICATIONS_SUCCESS',
    payload: { notifications },
  };
}

export function notificationsFaliure() {
  return {
    type: '@notification/NOTIFICATIONS_FALIURE',
  };
}

export function notificationDelete(id: number, projectId: number) {
  return {
    type: '@notification/NOTIFICATIONS_DELETE',
    payload: { id, projectId },
  };
}
export function notificationDeleteSuccess() {
  return {
    type: '@notification/NOTIFICATIONS_DELETE_SUCCESS',
  };
}

export function notificationOpenModal() {
  return {
    type: '@notification/OPEN_MODAL',
  };
}

export function notificationCloseModal() {
  return {
    type: '@notification/CLOSE_MODAL',
  };
}
export function notificationSaveRequest(
  notification: INotification,
  projectId: number
) {
  return {
    type: '@notification/NOTIFICATIONS_SAVE_RESQUEST',
    payload: { notification, projectId },
  };
}
export function notificationSaveSuccess() {
  return {
    type: '@notification/NOTIFICATIONS_SAVE_SUCCESS',
  };
}
export function notificationSaveFaliure() {
  return {
    type: '@notification/NOTIFICATIONS_SAVE_FALIURE',
  };
}
