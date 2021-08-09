import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';

import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

export default Search = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.main]}>
      <TouchableOpacity
        style={[styles.search]}
        onPress={() => navigation.navigate('SearchTab')}>
        <Icon name="magnify" color="black" size={responsiveHeight(4)} />
        <Text style={[styles.searchText]}>Search</Text>
      </TouchableOpacity>
      <Text>'Account'</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: responsiveHeight(5),
    backgroundColor: Colors.white_dark,
    margin: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    paddingLeft: responsiveWidth(2),
  },
  searchText: {
    color: Colors.grey_meduim_0,
    paddingLeft: responsiveWidth(4),
    fontSize: responsiveWidth(4),
  },
});
