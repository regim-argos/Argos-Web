import IUser from 'Types/IUser';

export function updateProfileRequest(data: IUser) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}

export function updateProfileSuccess(profile: IUser) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCESS',
    payload: { profile },
  };
}

export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_FAILURE',
  };
}

export function changeMenu() {
  return {
    type: '@user/CHANGE_MENU',
  };
}
