
import EventEmitter from 'EventEmitter';
import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AROverlay from '../../components/AROverlay'
//import { ImageDetection } from '../../components/ImageDetection'

export default class CameraScreen extends Component {
  render() {
    return (
      <View>
        <AROverlay />
      </View>
    );
  }
}