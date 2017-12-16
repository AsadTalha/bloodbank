import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';
import {Actions} from 'react-native-router-flux'

import Particle from '../../components/particle/'
import LeftArrow from '../../components/buttons/leftArrowBtn'
var data = require('./quotes')

export default class Quote extends Component {
  componentWillMount(){
    let quotes = data.data
    var item = quotes[Math.floor(Math.random()*quotes.length)];
    this.setState({quote: item.quote})
  }

  constructor(){
    super();
    this.state = {
      quote: 'quote'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Particle />
        <View style={styles.layer}>
          <View style={styles.quotes}>
            <Text style={{fontSize:20, color:'white'}}>
              {this.state.quote}
            </Text>
          </View>
          <View style={styles.btn}>
            <LeftArrow onPress={this.toEntry} />
          </View>
        </View>
      </View>
    );
  }

  toEntry(){
    var da = 'hello'
    Actions.entry({da})
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  layer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    height:'100%',
  },
  btn:{
    flex:2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  quotes:{
    flex:6,
    justifyContent: 'center',
    alignItems: 'center',
    padding:30,
  }
});
