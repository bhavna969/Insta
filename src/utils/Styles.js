import {StyleSheet} from 'react-native';

import * as Colors from './Colors';
import {responsiveHeight, responsiveWidth} from './Responsive';

const STYLES = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    height: responsiveHeight(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePic: {
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    borderRadius: responsiveWidth(10),
    marginLeft: responsiveWidth(4),
  },
});
export default STYLES;
