import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
  Animated
} from 'react-native';

var nextArrow= require('../../assets/quote-next.png')

export default class LeftArrow extends Component {

  state = {
  scaling: new Animated.Value(1),
  opacityA: new Animated.Value(1)
  }

  componentDidMount(){
    const {scaling, opacityA} = this.state;
    Animated.loop(
      Animated.parallel(
        [
          Animated.timing(scaling,{
            toValue: 1.5,
            duration: 2000
          })
        ,
          Animated.timing(opacityA,{
            toValue: 0,
            duration: 2000
          })
        ]
      )
    ).start()
  }

  render(){
    const {scaling, opacityA} = this.state;
    return(
      <View>
        <Animated.View
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            backgroundColor:'rgba(255, 255, 255, 1)',
            position: 'absolute',
            opacity: opacityA,
            transform:[
              {
                scale:scaling,
              }
            ]
          }}
          >
        </Animated.View>
        <View style={styles.quoteSkipButton}>
          <TouchableNativeFeedback onPress={this.props.onPress}>
            <View style={styles.quoteSkipButton}>
              <Image source= {nextArrow} style={{width: 25, height: 25, marginLeft:12}}/>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
 quoteSkipButton: {
   width: 60,
   height: 60,
   justifyContent: 'center',
   alignItems: 'center',
   borderRadius: 50,
   backgroundColor: '#fff',
   overflow:'hidden',
 },
});
