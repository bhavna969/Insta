import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';
import {responsiveHeight} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Chats extends React.Component {
  render() {
    return (
      <View style={[STYLES.main]}>
        <TouchableOpacity style={[STYLES.searchBar]}>
          <Icon
            name="magnify"
            color={Colors.black}
            size={responsiveHeight(4)}
          />
          <Text style={[STYLES.searchText]}>Search</Text>
        </TouchableOpacity>
        <Text>chats</Text>
      </View>
    );
  }
}

export default Chats;
