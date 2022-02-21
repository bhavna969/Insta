import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class SignIn extends React.Component {
  state = {
    showPhone: true,
    showEmail: false,
  };
  render() {
    const {showEmail, showPhone} = this.state;
    const {navigation} = this.props;
    return (
      <SafeAreaView style={[STYLES.main, {justifyContent: 'space-between'}]}>
        <Image
          style={[styles.image]}
          source={require('../assets/images/accountIcon.png')}
        />

        <View style={[styles.tab]}>
          <Pressable
            onPress={() => this.setState({showPhone: true, showEmail: false})}>
            {showPhone ? (
              <Text
                style={[
                  styles.tabText,
                  {borderBottomWidth: 1, color: Colors.black},
                ]}>
                PHONE
              </Text>
            ) : (
              <Text style={[styles.tabText]}>PHONE</Text>
            )}
          </Pressable>
          <Pressable
            onPress={() => this.setState({showPhone: false, showEmail: true})}>
            {showEmail ? (
              <Text
                style={[
                  styles.tabText,
                  {borderBottomWidth: 1, color: Colors.black},
                ]}>
                EMAIL
              </Text>
            ) : (
              <Text style={[styles.tabText]}>EMAIL</Text>
            )}
          </Pressable>
        </View>
        {showPhone ? (
          <>
            <TextInput style={[STYLES.input]} placeholder="Phone" />
            <Text style={[STYLES.infoText]}>
              You may receive SMS updates from Instagram and can opt out at any
              time
            </Text>
          </>
        ) : null}
        {showEmail ? (
          <TextInput style={[STYLES.input]} placeholder="Email" />
        ) : null}

        <TouchableOpacity style={[styles.button]} activeOpacity={0.6}>
          <Text style={[styles.buttonText]}>Next</Text>
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

export default SignIn;

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    marginTop: responsiveHeight(20),
  },
  tab: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: Colors.grey_light_0,
    marginLeft: responsiveWidth(5),
    marginRight: responsiveWidth(5),
  },
  tabText: {
    width: responsiveWidth(45),
    textAlign: 'center',
    padding: responsiveWidth(2),
    color: Colors.grey_meduim_0,
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    backgroundColor: Colors.blue_medium_1,
    marginBottom: responsiveHeight(7),
    borderRadius: responsiveWidth(3),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: responsiveWidth(4),
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
