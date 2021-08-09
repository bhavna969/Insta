import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Colors from '../utils/Colors';
import STYLES from '../utils/Styles';

import {responsiveHeight, responsiveWidth} from '../utils/Responsive';
import Header from '../components/Header';

const Icon = MaterialCommunityIcons;

class EditDetails extends React.Component {
  state = {
    text: '',
  };
  componentDidMount() {
    if (this.props.array[this.props.val].details)
      this.setState({text: this.props.array[this.props.val].details});
  }
  render() {
    const {val, navigation, heading} = this.props;
    const {text} = this.state;
    return (
      <SafeAreaView style={[styles.main]}>
        <Header title="" navigation={navigation} text={text} index={val} />
        <View style={[styles.container]}>
          <Text style={[styles.heading]}>{heading}</Text>
          <TextInput
            style={[styles.input]}
            value={text}
            onChangeText={value => this.setState({text: value})}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = state => {
  return {
    val: state.EditReducer.index,
    heading: state.EditReducer.title,
    array: state.EditReducer.array,
  };
};
export default connect(mapStateToProps, null)(EditDetails);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  container: {
    paddingLeft: responsiveWidth(5),
    paddingRight: responsiveWidth(5),
  },
  heading: {
    fontSize: responsiveWidth(3),
    color: Colors.grey_meduim_1,
    paddingTop: responsiveHeight(2),
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey_meduim_1,
  },
});
