import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class Merchant extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}