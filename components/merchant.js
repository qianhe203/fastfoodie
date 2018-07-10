import React, { Component } from 'react';
import { 
  AppRegistry, 
  StyleSheet, 
  Text, 
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class MerchantSignup extends React.Component {
  render() {
    return (
      <View style={styles.regform}>

        <Text>Merchant Signup</Text>
        <TextInput style={styles.textinput} placeholder="Restaurant Name" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Item" underlineColorAndroid={'transparent'} />
        <TextInput style={styles.textinput} placeholder="Price" underlineColorAndroid={'transparent'} />        
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btntext}>Register my Truck</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MerchantSignup: {
    alignSelf: 'stretch',
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom, 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color: '#fff',
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,
  },
  button: {

  }
});