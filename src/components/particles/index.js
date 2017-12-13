import React, {Component} from 'react';
import{
  WebView,
  Dimensions
} from 'react-native';

const window = Dimensions.get('window');

export default class Particles extends Component {
  render(){
    return(
        <WebView
          style={{width:window.width, height:window.height, flex:1, overflow: 'hidden'}}
          source={{ uri: "file:///android_asset/particles.js-master/demo/index.html"}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
    )
  }
}
