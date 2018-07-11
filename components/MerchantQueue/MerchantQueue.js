import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ItemDetail from './ListItem';
import moment from 'moment';
import { Card } from 'react-native-elements'; // Version can be specified in package.json

let time = moment().format('LT');
let itemsInQueue = {
  ticketNo: '000',
  person: 'Issac',
  items: [
    {name: 'hamburger', qty: 1},
    {name: 'paneer chili', qty: 1},
    {name: 'fruit salad', qty: 1},
    ]
  }

export default class MerchantQueue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card title={`Order #${itemsInQueue.ticketNo} For: ${itemsInQueue.person}`}>
          {itemsInQueue['items'].map(item => <ItemDetail item={item.name} qty={item.qty} person={item.person} />)}
        <Text style={styles.timestamp}>{`${moment().format('LT')}`}</Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timestamp: {
    textAlign: 'right'
  }
});