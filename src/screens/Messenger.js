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
import Chats from './Chats';
import Rooms from './Rooms';

const Icon = MaterialCommunityIcons;

class Messenger extends React.Component {
  state = {
    showChats: true,
    showRooms: false,
  };
  render() {
    const {navigation} = this.props;
    const {showRooms, showChats} = this.state;
    const tabStyle = {
      color: Colors.black,
      borderBottomWidth: 2,
      borderColor: Colors.grey_meduim_1,
    };
    return (
      <SafeAreaView style={[STYLES.main]}>
        <MessengerHeader navigation={navigation} />
        <View style={[styles.top]}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showChats: true,
                showRooms: false,
              })
            }>
            {showChats ? (
              <Text style={[styles.heading, tabStyle]}>Chats</Text>
            ) : (
              <Text style={[styles.heading]}>Chats</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                showChats: false,
                showRooms: true,
              })
            }>
            {showRooms ? (
              <Text style={[styles.heading, tabStyle]}>Rooms</Text>
            ) : (
              <Text style={[styles.heading]}>Rooms</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Requests');
              this.setState({
                showChats: true,
                showRooms: false,
              });
            }}>
            <Text style={[styles.heading]}>Requests</Text>
          </TouchableOpacity>
        </View>
        {showChats ? <Chats /> : null}
        {showRooms ? <Rooms /> : null}
      </SafeAreaView>
    );
  }
}

export default Messenger;

const styles = StyleSheet.create({
  heading: {
    fontSize: responsiveHeight(3),
    width: responsiveWidth(60),
    paddingLeft: responsiveWidth(2),
  },
  top: {
    flexDirection: 'row',
    paddingTop: responsiveHeight(1),
  },
  heading: {
    borderBottomWidth: 1,
    borderColor: Colors.grey_light_0,
    fontSize: responsiveWidth(3.5),
    padding: responsiveWidth(2),
    color: Colors.grey_meduim_0,
    textAlign: 'center',
    width: responsiveWidth(33),
  },
});
