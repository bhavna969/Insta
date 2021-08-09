import * as types from '../ActionTypes';

export const editProfile = payload => ({
  type: types.EDIT_PROFILE_START,
  payload,
});

export const saveChanges = payload => ({
  type: types.EDIT_PROFILE_SUCCESS,
  payload,
});

export const setDetails = payload => ({
  type: types.SET_PROFILE_DETAILS,
  payload,
});
