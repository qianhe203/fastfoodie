import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { Card } from 'react-native-elements'; // Version can be specified in package.json

let time = moment().format('LT');

export default class ItemDetail extends Component {
  render() {
    return (
      <View>
      <Card title={`Order #${this.props.ticketNo}`}>
        <Text>{this.props.item} | {this.props.qty}</Text>
        <Text>{this.props.person} | {time} </Text>
      </Card>
      </View>
    );
  }
}