import {
  takeLatest as sagaTakelastest,
  call,
  put,
  all,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from 'services/history';
import { openApi, closeApi } from 'services/api';

import {
  signInSuccess,
  signUpSuccess,
  signFailure,
  forgetPasswordSuccess,
  forgetPasswordFailure,
  confirmEmailSuccess,
  confirmEmailFailure,
  cleanRequest,
  confirmEmailPutSuccess,
  confirmEmailPutFailure,
  forgetPasswordPutSuccess,
  forgetPasswordPutFailure,
} from './actions';

const takeLatest: any = sagaTakelastest;

interface Action {
  payload: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    hash: string;
    auth: {
      token: string;
    };
  };
}

export function* signIn({ payload }: Action) {
  try {
    const { email, password } = payload;

    const response = yield call(openApi.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    closeApi.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* signUp({ payload }: Action) {
  try {
    const { name, email, password } = payload;

    yield call(openApi.post, 'users', {
      name,
      email,
      password,
    });

    yield put(signUpSuccess());

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados!');

    yield put(signFailure());
  }
}

export function* forgetPassword({ payload }: Action) {
  try {
    const { email } = payload;

    yield call(openApi.post, 'forgetPassword', {
      email,
    });

    yield put(forgetPasswordSuccess());

    toast.success('Email enviado com sucesso!');
    history.push('/');
  } catch (err) {
    toast.error('Falha email precisa ser confirmado!');
    yield put(forgetPasswordFailure());
  }
}

export function* forgetPasswordPut({ payload }: Action) {
  try {
    const { password, confirmPassword, hash } = payload;

    yield call(openApi.put, `forgetPassword/${hash}`, {
      password,
      confirmPassword,
    });

    yield put(forgetPasswordPutSuccess());

    toast.success('Senha alterada!');
    history.push('/');
  } catch (err) {
    toast.error('Codigo expirado!');
    yield put(forgetPasswordPutFailure());
  }
}

export function* confirmEmail({ payload }: Action) {
  try {
    const { email } = payload;

    yield call(openApi.post, 'confirmEmail', {
      email,
    });

    yield put(confirmEmailSuccess());

    toast.success('Email enviado com sucesso!');
    history.push('/');
  } catch (err) {
    toast.error('Falha email invalido!');
    yield put(confirmEmailFailure());
  }
}

export function* confirmEmailPut({ payload }: Action) {
  try {
    const { hash } = payload;

    yield call(openApi.put, `confirmEmail/${hash}`);

    yield put(confirmEmailPutSuccess());

    toast.success('Email confirmado com sucesso!');
    history.push('/');
  } catch (err) {
    toast.error('Codigo expirado!');
    yield put(confirmEmailPutFailure());
  }
}

export function setToken({ payload }: Action) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    closeApi.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* clean() {
  yield put(cleanRequest());
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('persist/REHYDRATE', clean),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/FORGET_PASSWORD_REQUEST', forgetPassword),
  takeLatest('@auth/FORGET_PASSWORD_PUT_REQUEST', forgetPasswordPut),
  takeLatest('@auth/CONFIRM_EMAIL_REQUEST', confirmEmail),
  takeLatest('@auth/CONFIRM_EMAIL_PUT_REQUEST', confirmEmailPut),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
