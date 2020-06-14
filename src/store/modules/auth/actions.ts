export function signInRequest(email: string, password: string) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token: string, user: object) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(name: string, email: string, password: string) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, email, password },
  };
}

export function signUpSuccess() {
  return {
    type: '@auth/SIGN_UP_SUCCESS',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}

export function forgetPasswordRequest(email: string) {
  return {
    type: '@auth/FORGET_PASSWORD_REQUEST',
    payload: { email },
  };
}
export function forgetPasswordSuccess() {
  return {
    type: '@auth/FORGET_PASSWORD_SUCCESS',
  };
}

export function forgetPasswordFailure() {
  return {
    type: '@auth/FORGET_PASSWORD_FAILURE',
  };
}

export function forgetPasswordPutRequest(
  password: string,
  confirmPassword: string,
  hash: string
) {
  return {
    type: '@auth/FORGET_PASSWORD_PUT_REQUEST',
    payload: { password, confirmPassword, hash },
  };
}
export function forgetPasswordPutSuccess() {
  return {
    type: '@auth/FORGET_PASSWORD_PUT_SUCCESS',
  };
}

export function forgetPasswordPutFailure() {
  return {
    type: '@auth/FORGET_PASSWORD_PUT_FAILURE',
  };
}

export function confirmEmailRequest(email: string) {
  return {
    type: '@auth/CONFIRM_EMAIL_REQUEST',
    payload: { email },
  };
}
export function confirmEmailSuccess() {
  return {
    type: '@auth/CONFIRM_EMAIL_SUCCESS',
  };
}

export function confirmEmailFailure() {
  return {
    type: '@auth/CONFIRM_EMAIL_FAILURE',
  };
}

export function confirmEmailPutRequest(hash: string) {
  return {
    type: '@auth/CONFIRM_EMAIL_PUT_REQUEST',
    payload: { hash },
  };
}
export function confirmEmailPutSuccess() {
  return {
    type: '@auth/CONFIRM_EMAIL_PUT_SUCCESS',
  };
}

export function confirmEmailPutFailure() {
  return {
    type: '@auth/CONFIRM_EMAIL_PUT_FAILURE',
  };
}

export function cleanRequest() {
  return {
    type: '@auth/CLEAN',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
