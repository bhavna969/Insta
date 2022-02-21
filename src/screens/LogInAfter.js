import React from 'react';
import {
  Image,
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

const Icon = MaterialCommunityIcons;

class LogInAfter extends React.Component {
  render() {
    const {navigation, array, image} = this.props;
    return (
      <SafeAreaView style={[STYLES.main]}>
        <Image
          style={[styles.image]}
          source={require('../assets/images/instagram.png')}
        />
        <TouchableOpacity
          style={[styles.button]}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('MyTabs')}>
          {image ? (
            <Image
              style={[STYLES.profilePic, styles.profilePic]}
              source={{uri: image.path}}
            />
          ) : (
            <Image
              style={[STYLES.profilePic, styles.profilePic]}
              source={require('../assets/images/nullImage.png')}
            />
          )}

          <Text style={[styles.buttonText, {width: responsiveWidth(50)}]}>
            {array[1].details}
          </Text>
          <Text style={[styles.buttonText, {borderWidth: 1}]}>Log in</Text>
          <Icon name="dots-vertical" size={responsiveWidth(6)} />
        </TouchableOpacity>
        <View style={[styles.bottomBox]}>
          <TouchableOpacity
            style={[styles.bottom]}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('LogIn')}>
            <Text style={[styles.SignInText]}>Switch Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.bottom]}
            activeOpacity={0.6}
            onPress={() => navigation.navigate('MainPage')}>
            <Text style={[styles.SignInText]}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.EditReducer.array,
    image: state.SetImageReducer.profilePicture,
  };
};
export default connect(mapStateToProps, null)(LogInAfter);

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    height: responsiveHeight(11),
    width: responsiveWidth(60),
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
  },
  profilePic: {
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    marginBottom: responsiveHeight(0),
  },
  button: {
    height: responsiveHeight(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: responsiveWidth(2),
  },
  buttonText: {
    fontSize: responsiveWidth(4),
    marginLeft: responsiveWidth(3),
    fontWeight: '100',
    padding: responsiveWidth(1),
    borderColor: Colors.grey_meduim_1,
    borderRadius: responsiveWidth(2),
  },
  bottomBox: {
    width: responsiveWidth(100),
    borderColor: Colors.grey_light_0,
    borderTopWidth: 1,
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
  },
  bottom: {
    width: responsiveWidth(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveWidth(3),
    borderColor: Colors.grey_light_0,
    borderRightWidth: 1,
  },
  SignInText: {
    color: Colors.blue_medium_1,
    fontWeight: 'bold',
    fontSize: responsiveWidth(3.8),
  },
});
