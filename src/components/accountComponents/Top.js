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
    const {navigation, array, image} = this.props;
    return (
      <View style={[STYLES.main]}>
        <View style={[styles.top]}>
          {image ? (
            <Image style={[STYLES.profilePic]} source={{uri: image.path}} />
          ) : (
            <Image
              style={[STYLES.profilePic]}
              source={require('../../assets/images/nullImage.png')}
            />
          )}
          <View style={[styles.topRight]}>
            <Pressable style={styles.box}>
              <Text style={[styles.count]}>41</Text>
              <Text style={{textAlign: 'center'}}>Posts</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={[styles.count]}>200</Text>
              <Text style={{textAlign: 'center'}}>Followers</Text>
            </Pressable>
            <Pressable style={styles.box}>
              <Text style={[styles.count]}>190</Text>
              <Text style={{textAlign: 'center'}}>Following</Text>
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
    image: state.SetImageReducer.profilePicture,
  };
};
export default connect(mapStateToProps, null)(Top);

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
  },
  topRight: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: responsiveWidth(70),
    height: responsiveHeight(10),
    marginLeft: responsiveWidth(5),
  },
  box: {
    flex: 1,
    height: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontWeight: 'bold',
    fontSize: responsiveWidth(4),
    textAlign: 'center',
  },
  text: {
    marginLeft: responsiveWidth(2),
    padding: responsiveWidth(2),
    paddingTop: 0,
    fontSize: responsiveWidth(3.8),
    fontWeight: '600',
  },
});
