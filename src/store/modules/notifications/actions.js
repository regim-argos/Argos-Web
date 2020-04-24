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
