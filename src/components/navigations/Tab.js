/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image} from 'react-native';
import {connect} from 'react-redux';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../screens/Home';
import Search from '../../screens/Search';
import Reels from '../../screens/Reels';
import Account from '../../screens/Account';
import Activity from '../../screens/Activity';

import * as Colors from '../../utils/Colors';
import STYLES from '../../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

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
          };
          return <Icon name={icons[route.name]} color={color} size={size} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({color}) => (
            <Image
              style={{
                marginTop: responsiveHeight(0.8),
                height: responsiveWidth(5),
                width: responsiveWidth(5),
              }}
              source={require('../../assets/images/reels_Icon.png')}
            />
          ),
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: '',
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({color}) =>
            props.image ? (
              <Image
                style={[
                  STYLES.profilePic,
                  {
                    height: responsiveWidth(8),
                    width: responsiveWidth(8),
                  },
                ]}
                source={{uri: props.image.path}}
              />
            ) : (
              <Image
                style={[
                  STYLES.profilePic,
                  {
                    height: responsiveWidth(8),
                    width: responsiveWidth(8),
                  },
                ]}
                source={require('../../assets/images/nullImage.png')}
              />
            ),
          tabBarLabel: '',
        }}
      />
    </Tab.Navigator>
  );
}

const mapStateToProps = state => {
  return {
    isPressedSetting: state.BottomDrawerReducer.isPressedSetting,
    isPressedAdd: state.BottomDrawerReducer.isPressedAdd,
    image: state.SetImageReducer.profilePicture,
  };
};
export default connect(mapStateToProps, null)(MyTabs);
