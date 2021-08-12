import * as types from '../ActionTypes';

export const SetImage = payload => ({
  type: types.SET_PROFILE_PICTIRE,
  payload,
});

export const RemoveImage = () => ({
  type: types.REMOVE_PROFILE_PICTIRE,
});
