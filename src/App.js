
import React, { Component } from 'react';
import {
Router,
Scene,
Actions
} from 'react-native-router-flux';
import _ from 'lodash';
import * as firebase from 'firebase';


import Quote from './containers/quotesContainer'
import Entry from './containers/entryPoint'
import RegisterNumber from './containers/register'
import data from './lib/cities.json'


export default class App extends Component<{}> {


  render() {
    // var item = _.filter(data, _.matches( 'id': '102'));
    // alert(item)
    return (
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="quote" Actions={Actions} firebaseApp={this.firebaseApp} component={RegisterNumber} hideNavBar={true}/>
            <Scene key="entry" component={Entry} hideNavBar={true} />
          </Scene>
        </Router>
      );
    }
  };
