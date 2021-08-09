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

class Add extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView style={[styles.main]}>
        <Text style={[styles.heading, {marginTop: responsiveHeight(3)}]}>
          Create New
        </Text>
        <TouchableOpacity style={[styles.button]} onPress={() => alert('hi')}>
          <Icon name="grid" size={responsiveWidth(7)} color={Colors.black} />
          <Text style={[styles.text]}>Feed Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Image
            style={[styles.icon]}
            source={require('../../assets/images/reels_Icon.png')}
          />
          <Text style={[styles.text]}>Reel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon
            name="circle-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[styles.text]}>Story</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Icon
            name="heart-circle-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[styles.text]}>Story Highlight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Image
            style={[styles.icon, {height: responsiveWidth(7)}]}
            source={require('../../assets/images/IGTV_Icon.png')}
          />
          <Text style={[styles.text]}>IGTV Video</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {marginBottom: responsiveHeight(2)}]}>
          <Image
            style={[styles.icon]}
            source={require('../../assets/images/guide.png')}
          />
          <Text style={[styles.text]}>Guide</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Add;

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
