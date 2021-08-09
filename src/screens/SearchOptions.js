import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

import * as Colors from '../utils/Colors';

export default Search = ({navigation}) => {
  return (
    <SafeAreaView style={[styles.main]}>
      <Text>Search</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
