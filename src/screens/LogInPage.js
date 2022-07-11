import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from './styles';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class LogIn extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={STYLES.main}>
        <Image
          style={STYLES.image}
          source={require('../assets/images/instagram.png')}
        />
        <TextInput
          style={[STYLES.input]}
          placeholder="Phone number, email id or username"
        />
        <TextInput style={[STYLES.input]} placeholder="Password" />

        <TouchableOpacity
          style={STYLES.button}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('MyTabs')}>
          <Text style={[styles.buttonText]}>Log in</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[STYLES.footer, {borderTopWidth: 0}]}
          activeOpacity={0.6}>
          <Text style={{color: Colors.grey_meduim_0}}>
            Forgot your Log in details?
          </Text>
          <Text style={[styles.logInText]}> Get help logging in.</Text>
        </TouchableOpacity>

        <View style={[styles.lineBox]}>
          <View style={[styles.line]} />
          <Text>OR</Text>
          <View style={[styles.line]} />
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          style={{height: responsiveHeight(25)}}>
          <Text style={[styles.signInText]}>Log in with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={STYLES.footer}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('MainPage')}>
          <Text style={{color: Colors.grey_meduim_0}}>
            Don't have an account?
          </Text>
          <Text style={[styles.logInText]}> Sign in.</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default LogIn;

const styles = StyleSheet.create({
  buttonText: {
    color: Colors.white,
    fontSize: responsiveWidth(4),
  },
  lineBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderWidth: 0.3,
    color: Colors.white_dark,
    width: responsiveWidth(45),
    height: 0,
    margin: responsiveWidth(2),
  },
  signInText: {
    height: responsiveHeight(5),
    color: Colors.blue_medium_1,
    fontWeight: 'bold',
    fontSize: responsiveWidth(3.5),
    textAlign: 'center',
    padding: responsiveWidth(4),
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(2),
  },
  logInText: {
    color: 'navy',
    fontWeight: 'bold',
  },
});
