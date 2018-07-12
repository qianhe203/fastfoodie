import React from 'react';
import { View, Image } from 'react-native';
import TotalComp from './TotalComponent';
const visaCheckout = require('../../assets/vco_standard.png');

const Footer = () => {
  const { 
    containerStyle, 
    buttonContainerStyle, 
    checkoutButtonStyle,
    imageStyle} = styles;
  return (
    <View style={containerStyle}>
      <TotalComp />
      <View style={buttonContainerStyle}>
        <View style={checkoutButtonStyle}>
            <Image source={visaCheckout} style={imageStyle} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
  },
  closeButtonStyle: {
    backgroundColor: '#7f8c8d',
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
    borderRadius: 3,
  }, 
  checkoutButtonStyle: {
    padding: 10,
    paddingRight: 60,
    paddingLeft: 60,
    borderRadius: 3,
  },
  imageStyle: {
    width: 250,
    height: 50,
  }
};

export default Footer;
