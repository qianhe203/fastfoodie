import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AROverlay from '../../components/AROverlay'

export default class CameraScreen extends Component {
  render() {
    return (
      <View>
        <Text>Hello World!</Text>
        <AROverlay />
      </View>
    );
  }
}
