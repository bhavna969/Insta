import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../../utils/Colors';
import STYLES from '../../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

import {
  showAddComponent,
  showSettingsComponent,
} from '../../store/actions/ShowBottomDrawerAction';

const Icon = MaterialCommunityIcons;

class Header extends React.Component {
  render() {
    const {
      navigation,
      array,
      showSettingsComponent,
      showAddComponent,
      isPressedAdd,
      isPressedSetting,
    } = this.props;
    return (
      <View style={[STYLES.header]}>
        <TouchableOpacity style={[styles.account]}>
          <Icon name="lock-outline" color="black" size={responsiveHeight(3)} />
          <Text style={[styles.heading]}>{array[1].details}</Text>
          <Icon name="chevron-down" color="black" size={responsiveHeight(3)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.add]}
          onPress={() => showAddComponent(!isPressedAdd)}>
          <Icon
            name="plus-box-outline"
            color={Colors.black}
            size={responsiveHeight(4.5)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.drawer]}
          onPress={() => showSettingsComponent(!isPressedSetting)}>
          <Image
            style={[styles.drawerIcon]}
            source={require('../../assets/images/drawerIcon.png.jpg')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.EditReducer.array,
    isPressedAdd: state.BottomDrawerReducer.isPressedAdd,
    isPressedSetting: state.BottomDrawerReducer.isPressedSetting,
  };
};
export default connect(mapStateToProps, {
  showAddComponent,
  showSettingsComponent,
})(Header);

const styles = StyleSheet.create({
  heading: {
    fontSize: responsiveHeight(3),
    marginHorizontal: responsiveHeight(0.5),
    fontWeight: 'bold',
  },
  account: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: responsiveWidth(70),
    height: '100%',
    paddingLeft: responsiveWidth(5),
  },
  drawer: {
    paddingRight: responsiveWidth(3),
  },
  drawerIcon: {
    height: responsiveHeight(6),
    width: responsiveWidth(7),
  },
});
