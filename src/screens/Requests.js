import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Requests extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <View style={[styles.header]}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={responsiveWidth(7)} />
          </TouchableOpacity>
          <Text style={[styles.heading]}>Message Requests</Text>
        </View>
        <Text style={[STYLES.infoText]}>
          Requests aren't marked seen until you accept them
        </Text>
        <View style={[styles.body]}>
          <TouchableOpacity style={[styles.box]}>
            <View style={[styles.icon]}>
              <Icon name="eye-off-outline" size={responsiveWidth(6)} />
            </View>
            <Text style={[styles.text, {width: responsiveWidth(70)}]}>
              Hidden Requests
            </Text>
            <View style={[styles.right]}>
              <Text style={[styles.text, {color: Colors.grey_meduim_1}]}>
                0
              </Text>
              <Icon
                name="chevron-right"
                size={responsiveWidth(6)}
                color={Colors.grey_meduim_1}
              />
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Requests;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: responsiveWidth(2),
    backgroundColor: Colors.white,
  },
  heading: {
    width: responsiveWidth(80),
    fontSize: responsiveWidth(5),
    fontWeight: '600',
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(3),
  },
  icon: {
    borderWidth: 1,
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(10),
  },
  text: {
    fontSize: responsiveWidth(4.5),
    paddingLeft: responsiveWidth(4),
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
