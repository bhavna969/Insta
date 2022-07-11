import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../../utils/Colors';
import STYLES from '../../utils/Styles';
import {responsiveWidth} from '../../utils/Responsive';

const Icon = MaterialCommunityIcons;

class Add extends React.Component {
  render() {
    return (
      <SafeAreaView style={[STYLES.accountComponentMain]}>
        <Text style={[STYLES.accountComponentHeading]}>Create New</Text>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon name="grid" size={responsiveWidth(7)} color={Colors.black} />
          <Text style={[STYLES.accountComponentText]}>Feed Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Image
            style={[STYLES.accountComponentIcon]}
            source={require('../../assets/images/reels_Icon.png')}
          />
          <Text style={[STYLES.accountComponentText]}>Reel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon
            name="circle-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[STYLES.accountComponentText]}>Story</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Icon
            name="heart-circle-outline"
            size={responsiveWidth(7)}
            color={Colors.black}
          />
          <Text style={[STYLES.accountComponentText]}>Story Highlight</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Image
            style={[STYLES.accountComponentIcon, {height: responsiveWidth(7)}]}
            source={require('../../assets/images/IGTV_Icon.png')}
          />
          <Text style={[STYLES.accountComponentText]}>IGTV Video</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[STYLES.accountComponentButton]}>
          <Image
            style={[STYLES.accountComponentIcon]}
            source={require('../../assets/images/guide.png')}
          />
          <Text style={[STYLES.accountComponentText]}>Guide</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Add;
