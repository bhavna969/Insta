import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
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

import Top from '../components/accountComponents/Top';
import Header from '../components/accountComponents/Header';
import Add from '../components/accountComponents/Add';
import Set from '../components/accountComponents/Setting';

const Icon = MaterialCommunityIcons;

class Account extends React.Component {
  render() {
    const {navigation, isPressedAdd, isPressedSetting} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <Header navigation={navigation} />
        <ScrollView>
          <Top navigation={navigation} />
          <TouchableOpacity
            style={[styles.editButton]}
            onPress={() => navigation.navigate('EditProfile')}>
            <Text style={[styles.editText]}>Edit Profile</Text>
          </TouchableOpacity>
        </ScrollView>
        {isPressedAdd ? <Add /> : null}
        {isPressedSetting ? <Set /> : null}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    isPressedAdd: state.BottomDrawerReducer.isPressedAdd,
    isPressedSetting: state.BottomDrawerReducer.isPressedSetting,
  };
};
export default connect(mapStateToProps, null)(Account);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  editButton: {
    borderWidth: 1,
    width: responsiveWidth(90),
    borderColor: Colors.grey_meduim_1,
    alignItems: 'center',
    marginLeft: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
  },
  editText: {
    padding: responsiveWidth(1.5),
    fontSize: responsiveWidth(4),
    fontWeight: 'bold',
  },
});
