// index.ios.js

import { ARKit, withProjectedPosition } from 'react-native-arkit';
import { AppRegistry, Dimensions, View } from 'react-native';
import React, { Component } from 'react';

import Navigation from './components/Navigation';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      active: 'Today',
    };
  }

  render() {
    return (
      <View>
        <Text>Fast Foodie!</Text>
        <Navigation />
      </View>
    );
  }
}

AppRegistry.registerComponent('ReactNativeARKit', () => App);
