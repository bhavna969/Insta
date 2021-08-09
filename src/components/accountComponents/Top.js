import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../../utils/Colors';
import STYLES from '../../utils/Styles';
import {responsiveHeight, responsiveWidth} from '../../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Top extends React.Component {
  render() {
    const {navigation, array} = this.props;
    return (
      <View style={[styles.main]}>
        <View style={[styles.top]}>
          <Image
            style={[STYLES.profilePic]}
            source={require('../../assets/images/nullImage.png')}
          />
          <View style={[styles.topRight]}>
            <Pressable>
              <Text style={[styles.count]}>41</Text>
              <Text>Posts</Text>
            </Pressable>
            <Pressable>
              <Text style={[styles.count]}>200</Text>
              <Text>Followers</Text>
            </Pressable>
            <Pressable>
              <Text style={[styles.count]}>190</Text>
              <Text>Following</Text>
            </Pressable>
          </View>
        </View>
        {array[0].details ? (
          <Text style={[styles.text]}>{array[0].details}</Text>
        ) : null}
        {array[2].details ? (
          <Text style={[styles.text]}>{array[2].details}</Text>
        ) : null}
        {array[3].details ? (
          <Text style={[styles.text]}>{array[3].details}</Text>
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    array: state.EditReducer.array,
  };
};
export default connect(mapStateToProps, null)(Top);

const styles = StyleSheet.create({
  main: {
    // flex: 1,
    backgroundColor: Colors.white,
  },
  top: {
    flexDirection: 'row',
  },
  topRight: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // borderWidth: 1,
    width: responsiveWidth(70),
    marginLeft: responsiveWidth(5),
  },
  count: {
    fontWeight: 'bold',
    fontSize: responsiveWidth(4),
    textAlign: 'center',
  },
  text: {
    marginLeft: responsiveWidth(2),
    // borderWidth: 1,
    padding: responsiveWidth(2),
    fontSize: responsiveWidth(3.8),
    fontWeight: '600',
  },
});
