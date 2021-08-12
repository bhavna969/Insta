import * as types from '../ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  isPressedAdd: false,
  isPressedSetting: false,
  isPressedProfile: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SHOW_ADD_COMPONENT:
      return {
        ...state,
        ...INITIAL_STATE,
        isPressedSetting: false,
        isPressedAdd: action.payload,
      };
    case types.SHOW_SETTING_COMPONENT:
      return {
        ...state,
        ...INITIAL_STATE,
        isPressedAdd: false,
        isPressedSetting: action.payload,
      };
    case types.SHOW_PROFILE_SELECTOR:
      return {
        ...state,
        ...INITIAL_STATE,
        isPressedProfile: action.payload,
      };
    default:
      return state;
  }
};
