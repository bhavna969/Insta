import * as types from '../ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INITIAL_STATE = {
  index: '',
  text: '',
  title: '',
  array: [
    {
      title: 'Name',
      details: null,
    },
    {
      title: 'UserName',
      details: '',
    },
    {
      title: 'Website',
      details: null,
    },
    {
      title: 'Bio',
      details: null,
    },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.EDIT_PROFILE_START:
      AsyncStorage.setItem('data', JSON.stringify(action.payload.array));
      // console.log('reducer', action.payload);
      return {
        ...state,
        ...INITIAL_STATE,
        index: action.payload.index,
        title: action.payload.title,
        array: action.payload.array,
      };
    case types.EDIT_PROFILE_SUCCESS:
      const newObj = {
        title: action.payload.heading,
        details: action.payload.text,
      };
      const newArr = [
        ...action.payload.array.slice(0, action.payload.index),
        newObj,
        ...action.payload.array.slice(action.payload.index + 1, 4),
      ];
      // console.log(newArr);
      AsyncStorage.removeItem('data');
      AsyncStorage.setItem('data', JSON.stringify(newArr));
      return {
        ...state,
        ...INITIAL_STATE,
        text: action.payload.text,
        index: action.payload.index,
        array: newArr,
      };
    case types.SET_PROFILE_DETAILS:
      // console.log('red', action.payload);
      return {
        ...state,
        array: action.payload,
      };
    default:
      return state;
  }
};
