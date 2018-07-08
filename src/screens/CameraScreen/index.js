
import waterfall from 'async'
import React, { Component } from 'react';

import { ARDisplay } from '../components/ARDisplay'
import { ImageDetection } from '../components/ImageDetection'

export default class CameraScreen extends Component {
  render() {
    return (
      <View>
        <ARDisplay />
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