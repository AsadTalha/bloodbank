import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';

export default class RectBtn extends Component {
  render(){
    return(
      <TouchableNativeFeedback>
        <View style={{width:"80%", height:40, borderRadius:5, backgroundColor:'white', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color:'red'}}>
            {this.props.title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}
