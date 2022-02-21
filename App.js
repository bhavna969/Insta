import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import store from './src/store';
import MainStack from './src/components/navigations/MainStack';
import MyStack from './src/components/navigations/Stack';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainStack />
        {/* <MyStack /> */}
      </Provider>
    );
  }
}
