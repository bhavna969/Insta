import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../../utils/Colors';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

import Search from '../../screens/SearchOptions';

const Tab = createMaterialTopTabNavigator();
const Icon = MaterialCommunityIcons;

export default function SearchTab(props) {
  return (
    <>
      <View style={[styles.search]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-left" color="black" size={responsiveWidth(7)} />
        </TouchableOpacity>
        <TextInput style={[styles.input]} placeholder="Search" />
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {fontSize: responsiveWidth(3)},
          tabBarItemStyle: {
            width: responsiveWidth(25),
            height: responsiveHeight(8),
          },
          tabBarStyle: {
            backgroundColor: Colors.white,
            paddingTop: responsiveHeight(2),
          },
          tabBarIndicatorStyle: {
            backgroundColor: Colors.grey_meduim_0,
          },
        }}>
        <Tab.Screen name="Top" component={Search} />
        <Tab.Screen name="Account" component={Search} />
        <Tab.Screen name="Tags" component={Search} />
        <Tab.Screen name="Places" component={Search} />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: responsiveHeight(7),
    backgroundColor: Colors.white,
    padding: responsiveWidth(1),
    paddingTop: responsiveHeight(2),
  },
  input: {
    backgroundColor: Colors.white_dark,
    alignItems: 'center',
    height: responsiveHeight(5.2),
    width: responsiveWidth(85),
    margin: responsiveWidth(1),
    borderRadius: responsiveWidth(4),
    paddingLeft: responsiveWidth(4),
  },
});
