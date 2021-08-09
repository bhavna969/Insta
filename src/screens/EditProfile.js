import React from 'react';
import {
  Image,
  Pressable,
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
import Header from '../components/Header';

import {editProfile} from '../store/actions/EditAction';

const Icon = MaterialCommunityIcons;

class EditProfile extends React.Component {
  render() {
    const {navigation, editProfile, text, array} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <Header title="Edit Profile" navigation={navigation} edit />
        <Image
          style={[STYLES.profilePic, {alignSelf: 'center', marginLeft: 0}]}
          source={require('../assets/images/nullImage.png')}
        />
        <TouchableOpacity>
          <Text style={[styles.changePicText]}>Change Profile Photo</Text>
        </TouchableOpacity>
        <View style={[styles.container]}>
          {array.map((val, index) => {
            return (
              <View key={index}>
                <Text style={[styles.heading]}>{val.title}</Text>
                <Pressable
                  style={[styles.text]}
                  onPress={() => {
                    editProfile({array, index, title: val.title});
                    navigation.navigate('EditDetails');
                  }}>
                  <Text>{val.details}</Text>
                </Pressable>
              </View>
            );
          })}
        </View>
        <TouchableOpacity>
          <Text style={[styles.bottom, {marginTop: responsiveHeight(3)}]}>
            Switch to Professional Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.bottom]}>Personal Infromation Setting</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.EditReducer.array,
  };
};
export default connect(mapStateToProps, {editProfile})(EditProfile);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
  },
  heading: {
    fontSize: responsiveWidth(3),
    color: Colors.grey_meduim_1,
    paddingTop: responsiveHeight(2),
  },
  text: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey_meduim_1,
    paddingTop: responsiveHeight(2),
  },
  changePicText: {
    padding: responsiveWidth(2),
    textAlign: 'center',
    color: Colors.blue_medium_5,
    fontSize: responsiveWidth(3.8),
  },
  bottom: {
    padding: responsiveWidth(3),
    color: Colors.blue_medium_5,
    fontSize: responsiveWidth(4),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: responsiveHeight(1),
    borderColor: Colors.grey_light_0,
  },
});
