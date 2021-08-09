import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import MessengerHeader from '../components/MessengerHeader';

const Icon = MaterialCommunityIcons;

class Chats extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text>chats</Text>
      </View>
    );
  }
}

export default Chats;

const styles = StyleSheet.create({});
