import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ItemDetail from './ListItem';
import moment from 'moment';
import { Card } from 'react-native-elements'; // Version can be specified in package.json

let time = moment().format('LT');
let itemsInQueue = [
  {ticketNo: '0', name: 'hamburger', qty: 1, person: 'Issac'},
  {ticketNo: '1', name: 'paneer chili', qty: 2, person: 'Qian'}
  ]

export default class AssetExample extends Component {
  render() {
    return (
      <View style={styles.container}>
          {itemsInQueue.map(item => <ItemDetail ticketNo={item.ticketNo} item={item.name} qty={item.qty} person={item.person} />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});