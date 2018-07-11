import { createBottomTabNavigator, BottomTabBar } from 'react-navigation';
import React, { Component } from 'react';

//import CameraScreen from '../../screens/CameraScreen';
import MerchantScreen from '../../screens/MerchantScreen';

export default Navigator = createBottomTabNavigator({
    CameraScreen: {
      screen: CameraScreen,
      navigationOptions: () => ({
        tabBarIcon({tintColor}) => (
          <Icon
              name="Camera"
              color={tintColor}
              size={24}
          />
      }
    },
    MerchantScreen: { screen: MerchantScreen }
  }, {
    title: 'Navigation',
    initialRouteName: 'MerchantScreen'
  }
);