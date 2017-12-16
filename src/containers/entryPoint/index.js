import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class Entry extends Component {
  render(){
    return(
      <View>
        <Text>
          {this.props.da}
        </Text>
      </View>
    );
  }
}
