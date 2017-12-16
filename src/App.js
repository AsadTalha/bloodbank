
import React, { Component } from 'react';

import {
Router,
Scene,
Actions
} from 'react-native-router-flux';

import Quote from './containers/quotesContainer'
import Entry from './containers/entryPoint'

export default class App extends Component<{}> {
  render() {
    return (
        <Router>
          <Scene key="root" hideNavBar={true}>
            <Scene key="quote" Actions={Actions} component={Quote} hideNavBar={true}/>
            <Scene key="entry" component={Entry} hideNavBar={true} />
          </Scene>
        </Router>
      );
    }
  };
