import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class DollaDollaBillsScreen extends Component {
  constructor(props) {
    this.onPress = props.onPress
  }

  render() {
    return (
      <Text>Money</Text>
    );
  }
}