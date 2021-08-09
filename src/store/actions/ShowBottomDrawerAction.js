import * as types from '../ActionTypes';

export const showAddComponent = payload => ({
  type: types.SHOW_ADD_COMPONENT,
  payload,
});

export const showSettingsComponent = payload => ({
  type: types.SHOW_SETTING_COMPONENT,
  payload,
});
