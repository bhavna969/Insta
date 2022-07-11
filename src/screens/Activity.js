import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import * as Colors from '../utils/Colors';
import {responsiveWidth} from '../utils/Responsive';

export default Activity = () => {
  return (
    <SafeAreaView style={[styles.main]}>
      <Text style={[styles.heading]}>Activity</Text>
      <Text>Account</Text>
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
