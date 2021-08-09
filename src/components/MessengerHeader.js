import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Header extends React.Component {
  render() {
    const {navigation, array} = this.props;
    return (
      <SafeAreaView style={[STYLES.header]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={responsiveWidth(7)} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.middle]}>
          <Text style={[styles.heading]}>{array[1].details}</Text>
          <Icon name="chevron-down" size={responsiveWidth(6)} />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.add]}>
          <Icon
            name="video-outline"
            color={Colors.black}
            size={responsiveHeight(6)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingRight: responsiveWidth(2)}}>
          <Icon
            name="square-edit-outline"
            color="black"
            size={responsiveHeight(4.5)}
          />
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
export default connect(mapStateToProps, null)(Header);

const styles = StyleSheet.create({
  middle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: responsiveWidth(60),
  },
  heading: {
    fontSize: responsiveHeight(3),
    paddingLeft: responsiveWidth(2),
  },
});
