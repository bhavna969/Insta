import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';
import {responsiveHeight} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

export default Search = ({navigation}) => {
  return (
    <SafeAreaView style={[STYLES.main]}>
      <TouchableOpacity
        style={[STYLES.searchBar]}
        onPress={() => navigation.navigate('SearchTab')}>
        <Icon name="magnify" color={Colors.black} size={responsiveHeight(4)} />
        <Text style={[STYLES.searchText]}>Search</Text>
      </TouchableOpacity>
      <Text>'Account'</Text>
    </SafeAreaView>
  );
};
