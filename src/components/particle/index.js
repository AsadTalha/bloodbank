import React, {Component} from 'react';
import{
  View,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export default class Particle extends Component {
  render(){
    return(
        <View style={{backgroundColor: 'red', width: window.width, height: window.height}}>
        </View>
    )
  }
}
