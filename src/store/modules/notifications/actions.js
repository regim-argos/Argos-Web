export function notificationsRequest() {
  return {
    type: '@notification/NOTIFICATIONS_REQUEST',
  };
}

export function notificationSuccess(notifications) {
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

export function notificationDelete(id) {
  return {
    type: '@notification/NOTIFICATIONS_DELETE',
    payload: { id },
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
