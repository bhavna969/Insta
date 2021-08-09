import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../../utils/Colors';
import STYLES from '../../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Set extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <TouchableOpacity
          style={[styles.button, {marginTop: responsiveHeight(2)}]}>
          <Icon name="cog" size={responsiveWidth(7)} color={Colors.black} />
          <Text style={[styles.text]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon
            name="clock-time-seven"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[styles.text]}>Archive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon
            name="clock-time-seven-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[styles.text]}>Your Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon
            name="qrcode-scan"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[styles.text]}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon
            name="bookmark-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[styles.text]}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon
            name="format-list-bulleted-square"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[styles.text]}>Close Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon name="account" size={responsiveWidth(7)} color={Colors.black} />
          <Text style={[styles.text]}>"Covid-19 Information Center</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Set;

const styles = StyleSheet.create({
  main: {
    // borderWidth: 1,
    backgroundColor: Colors.white,
    position: 'absolute',
    backfaceVisibility: 'visible',
    bottom: 0,
  },
  button: {
    height: responsiveHeight(7),
    flexDirection: 'row',
    paddingBottom: responsiveWidth(4),
    marginLeft: responsiveWidth(3),
  },
  heading: {
    paddingBottom: responsiveWidth(2),
    textAlign: 'center',
    fontSize: responsiveWidth(4),
  },
  text: {
    width: responsiveWidth(85),
    borderBottomWidth: 1,
    borderColor: Colors.grey_light_0,
    fontSize: responsiveWidth(4),
    marginLeft: responsiveWidth(3),
  },
  icon: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
  },
});
