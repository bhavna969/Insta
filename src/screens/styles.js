import {StyleSheet} from 'react-native';
import {responsiveHeight, responsiveWidth} from '../utils';
import * as Colors from '../utils/Colors';

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
  image: {
    alignSelf: 'center',
    height: responsiveHeight(11),
    width: responsiveWidth(70),
    marginTop: responsiveHeight(20),
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(6),
    backgroundColor: Colors.blue_medium_1,
    marginVertical: responsiveHeight(1),
    borderRadius: responsiveWidth(2),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    height: responsiveHeight(5),
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.grey_light_0,
    bottom: 0,
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
    color: Colors.grey_meduim_1,
    fontWeight: '200',
    fontSize: responsiveWidth(2.7),
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
    padding: responsiveWidth(4),
  },
});
export default STYLES;
