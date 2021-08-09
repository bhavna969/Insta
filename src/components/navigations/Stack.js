import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import MyTabs from './Tab';
import SearchTab from './SearchTab';

import Account from '../../screens/Account';
import EditProfile from '../../screens/EditProfile';
import EditDetails from '../../screens/EditDetails';
import Search from '../../screens/Search';
import Messenger from '../../screens/Messenger';
import Requests from '../../screens/Requests';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditDetails"
          component={EditDetails}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
