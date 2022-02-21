import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MyStack from './Stack';
import MyTabs from './Tab';
import SearchTab from './SearchTab';

import Account from '../../screens/Account';
import EditProfile from '../../screens/EditProfile';
import EditDetails from '../../screens/EditDetails';
import Search from '../../screens/Search';
import Messenger from '../../screens/Messenger';
import Requests from '../../screens/Requests';
import Settings from '../../screens/Settings';
import MainPage from '../../screens/MainPage';
import LogIn from '../../screens/LogInPage';
import SignIn from '../../screens/SignInPage';
import LogInAfter from '../../screens/LogInAfter';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyStack"
          component={MyStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Messenger"
          component={Messenger}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Requests"
          component={Requests}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchTab"
          component={SearchTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={Account}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditDetails"
          component={EditDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LogInAfter"
          component={LogInAfter}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
