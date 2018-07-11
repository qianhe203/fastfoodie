import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { Card } from 'react-native-elements'; // Version can be specified in package.json

let time = moment().format('LT');

export default class ItemDetail extends Component {
  render() {
    return (
      <View style={{flexDirection:'row', flexWrap:'wrap'}}>
        <Text >{this.props.item} | </Text>
        <Text>{this.props.qty}</Text>
      </View>
    );
  }
}