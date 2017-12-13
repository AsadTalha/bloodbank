import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import Particles from './components/particles/'

export default class Index extends Component {
  render(){
    return(
      <View style={styles.container}>




        <View style={styles.background}>
          <Text style={{color:'white'}}>Hello</Text>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  background: {
    // position:'absolute',
    // backgroundColor:'rgba(0, 0, 0, 0.4)',
    width:'100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
 },
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'red',
   width:'100%',
 }
});
