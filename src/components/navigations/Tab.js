import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Activity from '../../screens/Activity';

import * as Colors from '../../utils/Colors';
import Account from '../../screens/Account';
import {connect} from 'react-redux';

const Tab = createMaterialBottomTabNavigator();
const Icon = MaterialCommunityIcons;

function MyTabs(props) {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: Colors.white,
        display: props.isPressedAdd || props.isPressedSetting ? 'none' : null,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size = 25}) => {
          const icons = {
            Home: 'home',
            Search: 'magnify',
            Activity: 'heart',
            Account: 'account',
          };
          return <Icon name={icons[route.name]} color={color} size={size} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    array: state.EditReducer.array,
    isPressedSetting: state.BottomDrawerReducer.isPressedSetting,
    isPressedAdd: state.BottomDrawerReducer.isPressedAdd,
  };
};
export default connect(mapStateToProps, null)(MyTabs);
