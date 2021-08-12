import * as types from '../ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  profilePicture: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_PROFILE_PICTIRE:
      AsyncStorage.setItem('profilePicture', JSON.stringify(action.payload));
      return {
        ...state,
        ...INITIAL_STATE,
        profilePicture: action.payload,
      };
    case types.REMOVE_PROFILE_PICTIRE:
      AsyncStorage.removeItem('profilePicture');
      return {
        ...state,
        ...INITIAL_STATE,
        profilePicture: null,
      };
    default:
      return state;
  }
};
