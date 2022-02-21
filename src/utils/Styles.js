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
    marginBottom: responsiveHeight(1),
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: responsiveHeight(5),
    backgroundColor: Colors.white_dark,
    margin: responsiveWidth(2),
    borderRadius: responsiveWidth(3),
    paddingLeft: responsiveWidth(2),
  },
  searchText: {
    color: Colors.grey_meduim_0,
    paddingLeft: responsiveWidth(4),
    fontSize: responsiveWidth(4),
  },
  infoText: {
    textAlign: 'center',
    padding: responsiveWidth(2),
    color: Colors.grey_meduim_1,
    fontWeight: '100',
    fontSize: responsiveWidth(3),
    marginLeft: responsiveWidth(1),
    marginRight: responsiveWidth(2),
  },

  //Acccount Components STyles
  accountComponentMain: {
    borderWidth: 1,
    borderColor: Colors.grey_meduim_1,
    backgroundColor: Colors.white_dark,
    position: 'absolute',
    backfaceVisibility: 'visible',
    bottom: 0,
    paddingTop: responsiveHeight(3),
    borderTopLeftRadius: responsiveWidth(10),
    borderTopRightRadius: responsiveWidth(10),
  },
  accountComponentButton: {
    height: responsiveHeight(8),
    flexDirection: 'row',
    paddingBottom: responsiveHeight(1.5),
    marginLeft: responsiveWidth(4),
  },
  accountComponentIcon: {
    width: responsiveWidth(6),
    height: responsiveWidth(6),
  },
  accountComponentHeading: {
    paddingBottom: responsiveWidth(2),
    textAlign: 'center',
    fontSize: responsiveWidth(4),
  },
  accountComponentText: {
    width: responsiveWidth(84),
    borderBottomWidth: 1,
    borderColor: Colors.grey_light_0,
    fontSize: responsiveWidth(4),
    marginLeft: responsiveWidth(4),
  },
  //input
  input: {
    borderWidth: 1,
    borderColor: Colors.grey_light_0,
    backgroundColor: Colors.white_dark,
    borderRadius: responsiveWidth(3),
    width: responsiveWidth(90),
    alignSelf: 'center',
    marginVertical: responsiveHeight(1),
    paddingLeft: responsiveWidth(5),
  },
});
export default STYLES;
