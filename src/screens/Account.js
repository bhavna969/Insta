import React from 'react';
import {
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
import {responsiveWidth} from '../utils/Responsive';

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
          <View style={[styles.edit]}>
            <TouchableOpacity
              style={[styles.editButton, styles.button]}
              onPress={() => navigation.navigate('EditProfile')}>
              <Text style={[styles.editText]}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.suggestButton, styles.button]}>
              <Icon name="chevron-down" size={responsiveWidth(6)} />
            </TouchableOpacity>
          </View>
        </ScrollView>
        {isPressedAdd ? <Add navigation={navigation} /> : null}
        {isPressedSetting ? <Set navigation={navigation} /> : null}
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
  edit: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.grey_meduim_1,
    alignItems: 'center',
  },
  editButton: {
    width: responsiveWidth(88),
    marginLeft: responsiveWidth(2),
    borderRadius: responsiveWidth(2),
  },
  suggestButton: {
    marginLeft: responsiveWidth(1),
    borderRadius: responsiveWidth(1.5),
  },
  editText: {
    padding: responsiveWidth(1.5),
    fontSize: responsiveWidth(4),
    fontWeight: 'bold',
  },
});
