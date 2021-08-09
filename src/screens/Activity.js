import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';

import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

export default Activity = () => {
  return (
    <SafeAreaView style={[styles.main]}>
      <Text style={[styles.heading]}>Activity</Text>
      <Text>'Account'</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  heading: {
    fontSize: responsiveWidth(6),
    // borderWidth: 1,
    color: Colors.black,
    fontWeight: 'bold',
    padding: responsiveWidth(2),
    paddingBottom: responsiveWidth(3),
  },
});
