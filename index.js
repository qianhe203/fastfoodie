// index.ios.js

import { ARKit, withProjectedPosition } from 'react-native-arkit';
import { AppRegistry, Dimensions, Icon, Text, View } from 'react-native';
import React, { Component } from 'react';

import Navigator from './components/Navigation';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 'Today',
    };
  }

  render() {
    return (
        <Navigator />
    );
  }
}

AppRegistry.registerComponent('ReactNativeARKit', () => App);
