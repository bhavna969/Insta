import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';

import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import {saveChanges} from '../store/actions/EditAction';

const Icon = MaterialCommunityIcons;

class Header extends React.Component {
  saveDetails = () => {
    const {text, index, saveChanges, array, heading, edit} = this.props;
    if (!edit) saveChanges({array, text, index, heading});
  };
  render() {
    const {title, navigation} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="close" size={35} color={Colors.black} />
        </Pressable>
        <Text style={[styles.title]}>{title}</Text>
        <Pressable
          onPress={() => {
            navigation.goBack();
            this.saveDetails();
          }}>
          <Icon name="check" size={35} color={Colors.blue_medium_1} />
        </Pressable>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.EditReducer.array,
    heading: state.EditReducer.title,
  };
};
export default connect(mapStateToProps, {saveChanges})(Header);

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: responsiveWidth(2),
  },
  title: {
    fontSize: responsiveWidth(5.5),
    fontWeight: 'bold',
    width: responsiveWidth(60),
  },
});
