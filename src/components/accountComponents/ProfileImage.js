import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-crop-picker';

import * as Colors from '../../utils/Colors';
import STYLES from '../../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

import {SetImage, RemoveImage, showProfileSelector} from '../..//store/actions';

const Icon = MaterialCommunityIcons;

class ProfileImage extends React.Component {
  selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.props.SetImage(image);
    });
  };
  render() {
    const {showProfileSelector} = this.props;
    return (
      <SafeAreaView
        style={[STYLES.accountComponentMain, {width: responsiveWidth(100)}]}>
        <Text style={[STYLES.accountComponentHeading, styles.heading]}>
          Change Profile Photo
        </Text>
        <TouchableOpacity
          style={[STYLES.accountComponentButton]}
          onPress={() => {
            this.selectImage();
            showProfileSelector(false);
          }}>
          <Text style={[STYLES.accountComponentText, styles.text]}>
            New Profile Photo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[STYLES.accountComponentButton]}
          onPress={() => {
            showProfileSelector(false);
          }}>
          <Text style={[STYLES.accountComponentText, styles.text]}>
            Import From Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[STYLES.accountComponentButton]}
          onPress={() => {
            this.props.RemoveImage();
            showProfileSelector(false);
          }}>
          <Text
            style={[
              STYLES.accountComponentText,
              styles.text,
              {color: Colors.red},
            ]}>
            Remove Profile Photo
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    isPressed: state.BottomDrawerReducer.isPressedProfile,
  };
};
export default connect(mapStateToProps, {
  SetImage,
  RemoveImage,
  showProfileSelector,
})(ProfileImage);

const styles = StyleSheet.create({
  heading: {
    textAlign: 'left',
    paddingLeft: responsiveWidth(8),
    marginBottom: responsiveHeight(3),
    borderBottomWidth: 1,
    borderColor: Colors.grey_light_0,
  },
  text: {
    borderBottomWidth: 0,
  },
});
