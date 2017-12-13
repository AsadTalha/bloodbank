
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import Index from './src'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Index />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
