import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';

import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

export default Settings = ({navigation}) => {
  return (
    <SafeAreaView style={[STYLES.main, {paddingLeft: responsiveWidth(2)}]}>
      {/* header */}
      <View style={[STYLES.header]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={responsiveWidth(7)} />
        </TouchableOpacity>
        <Text style={[styles.heading]}>Settings</Text>
      </View>
      <ScrollView style={[STYLES.main, {marginBottom: responsiveHeight(5)}]}>
        {/* searchbar */}
        <TouchableOpacity style={[STYLES.searchBar]}>
          <Icon
            name="magnify"
            color={Colors.black}
            size={responsiveHeight(4)}
          />
          <Text style={[STYLES.searchText]}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {marginTop: responsiveHeight(3)}]}>
          <Icon name="account-plus-outline" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Follow and Invite Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="bell-outline" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="lock-outline" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="security" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Security</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="bullhorn-outline" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="account-circle-outline" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="lifebuoy" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="information-outline" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="palette-outline" size={responsiveWidth(7)} />
          <Text style={[styles.text]}>Theme</Text>
        </TouchableOpacity>
        <Text style={[styles.facebookText]}>F A C E B O O K</Text>
        <TouchableOpacity>
          <Text style={[styles.textBottom]}>Account Center</Text>
        </TouchableOpacity>
        <Text style={[STYLES.infoText, {textAlign: 'left'}]}>
          Control settings for connected experiences across Instagram, the
          Facebook app and Messenger, including story and post sharing and
          logging in
        </Text>
        <Text style={[styles.text, {marginTop: responsiveHeight(2)}]}>
          Logins
        </Text>
        <TouchableOpacity>
          <Text style={[styles.textBottom]}>Add Account</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.textBottom]}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    width: responsiveWidth(85),
    fontSize: responsiveWidth(5),
    fontWeight: '400',
  },
  button: {
    height: responsiveHeight(7),
    flexDirection: 'row',
    paddingBottom: responsiveWidth(4),
    marginLeft: responsiveWidth(2),
  },
  text: {
    width: responsiveWidth(85),
    fontSize: responsiveWidth(4),
    marginLeft: responsiveWidth(3),
    fontWeight: '100',
  },
  facebookText: {
    marginLeft: responsiveWidth(2),
    padding: responsiveWidth(2),
    fontWeight: 'bold',
    fontSize: responsiveWidth(4),
  },
  textBottom: {
    fontSize: responsiveWidth(3.7),
    marginLeft: responsiveWidth(2),
    padding: responsiveWidth(1),
    color: Colors.blue_medium_1,
    marginTop: responsiveHeight(2),
  },
});
