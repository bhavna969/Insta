import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {showSettingsComponent} from '../../store/actions/ShowBottomDrawerAction';

import * as Colors from '../../utils/Colors';
import STYLES from '../../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Set extends React.Component {
  render() {
    const {navigation, showSettingsComponent} = this.props;
    return (
      <SafeAreaView style={[STYLES.accountComponentMain]}>
        <TouchableOpacity
          style={[STYLES.accountComponentButton]}
          onPress={() => {
            showSettingsComponent(false);
            navigation.navigate('Settings');
          }}>
          <Icon name="cog" size={responsiveWidth(7)} color={Colors.black} />
          <Text style={[STYLES.accountComponentText]}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon
            name="clock-time-seven"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[STYLES.accountComponentText]}>Archive</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon
            name="clock-time-seven-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[STYLES.accountComponentText]}>Your Activity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon
            name="qrcode-scan"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[STYLES.accountComponentText]}>QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon
            name="bookmark-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[STYLES.accountComponentText]}>Saved</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon
            name="format-list-bulleted-square"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[STYLES.accountComponentText]}>Close Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon name="account" size={responsiveWidth(7)} color={Colors.black} />
          <Text style={[STYLES.accountComponentText]}>
            "Covid-19 Information Center
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default connect(null, {showSettingsComponent})(Set);

const styles = StyleSheet.create({});
