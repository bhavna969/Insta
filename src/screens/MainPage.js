import React from 'react';
import {
  Image,
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

class MainPage extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={[STYLES.main, {justifyContent: 'space-between'}]}>
        <Image
          style={[styles.image]}
          source={require('../assets/images/instagram.png')}
        />

        <TouchableOpacity style={[styles.button]} activeOpacity={0.6}>
          <Text style={[styles.buttonText]}>Log in with Facebook</Text>
        </TouchableOpacity>

        <View style={[styles.lineBox]}>
          <View style={[styles.line]} />
          <Text>OR</Text>
          <View style={[styles.line]} />
        </View>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.navigate('SignIn')}>
          <Text style={[styles.signInText]}>
            Sign up with email or phone number
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.bottom]}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={{color: Colors.grey_meduim_0}}>
            Already have an account?
          </Text>
          <Text style={[styles.logInText]}> Log in.</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default MainPage;

const styles = StyleSheet.create({
  image: {
    borderWidth: 10,
    alignSelf: 'center',
    height: responsiveHeight(11),
    width: responsiveWidth(60),
    marginTop: responsiveHeight(25),
  },
  button: {
    width: responsiveWidth(95),
    height: responsiveHeight(8),
    backgroundColor: Colors.blue_medium_1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: responsiveHeight(6),
    marginTop: responsiveHeight(18),
    borderRadius: responsiveWidth(2),
  },
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
    color: Colors.blue_medium_1,
    fontWeight: 'bold',
    fontSize: responsiveWidth(3.5),
    textAlign: 'center',
    padding: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(8),
  },
  bottom: {
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveWidth(3),
    borderColor: Colors.grey_light_0,
    bottom: 0,
  },
  logInText: {
    color: 'navy',
    fontWeight: 'bold',
  },
});
