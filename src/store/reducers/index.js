import {combineReducers} from 'redux';
import EditReducer from './EditReducer';
import BottomDrawerReducer from './BottomDrawerReducer';
import SetImageReducer from './SetImageReducer';

export default combineReducers({
  EditReducer,
  BottomDrawerReducer,
  SetImageReducer,
});
