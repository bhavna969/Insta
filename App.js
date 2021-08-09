import React from 'react';
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';
import store from './src/store';
import MyStack from './src/components/navigations/Stack';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MyStack />
      </Provider>
    );
  }
}
