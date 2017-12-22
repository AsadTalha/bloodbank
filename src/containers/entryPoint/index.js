import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';

import RectBtn from '../../components/buttons/rectangleBtn'
var logo = require('../../assets/logo.png')
var nextArrow= require('../../assets/quote-next.png')


export default class Entry extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={logo} />
        </View>

        <View style={styles.entryBtnContainer}>
          <RectBtn title={'Find a doner'}/>
          <RectBtn title={'Register as Doner'}/>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    flex:1,
    justifyContent:'space-between'
  },
  logoContainer: {
    flex:3,
    backgroundColor: 'white',

  },
  entryBtnContainer:{
    flex:1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom:50
  }
})
