import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import {connect} from 'react-redux';
import {setDetails} from '../store/actions/EditAction';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Home extends React.Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    AsyncStorage.getItem('data')
      .then(Data => {
        // console.log(Data);
        this.setState({loading: false});
        if (Data) this.props.setDetails(JSON.parse(Data));
      })
      .catch(error => {
        this.setState({loading: false});
        console.log(error);
      });
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={[STYLES.main]}>
        <View style={[STYLES.header]}>
          <Text style={[styles.heading]}>Instagram</Text>
          <TouchableHighlight style={[styles.add]}>
            <Icon
              name="plus-box-outline"
              color={Colors.black}
              size={responsiveHeight(4.5)}
            />
          </TouchableHighlight>
          <TouchableOpacity
            style={[styles.message]}
            onPress={() => navigation.navigate('Messenger')}>
            <Icon
              name="facebook-messenger"
              color="black"
              size={responsiveHeight(4.5)}
            />
          </TouchableOpacity>
        </View>
        <Text>'Home'</Text>
      </SafeAreaView>
    );
  }
}

export default connect(null, {setDetails})(Home);

const styles = StyleSheet.create({
  heading: {
    fontSize: responsiveHeight(3.5),
    width: responsiveWidth(70),
    paddingLeft: responsiveWidth(4),
  },
});
