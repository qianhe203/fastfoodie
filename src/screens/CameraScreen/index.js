
import EventEmitter from 'EventEmitter';
import React, { Component } from 'react';

import { ARDisplay } from '../components/AROverlay'
import { ImageDetection } from '../components/ImageDetection'

export default class CameraScreen extends Component {
  render() {
    const eventStream = new EventEmitter();

    return (
      <View>
        <AROverlay eventStream=eventStream/>
        <ImageDetection eventStream=eventStream/>
      </View>
    );
  }

  _OnClick() {
    this.setState({ loading: true })

    waterfall(
      ImageDetection.detect,
      ARDisplay.display,
      () => {
        this.setState({ loading: false })
      },
      this.image // TODO: Properly reference image
    )
}