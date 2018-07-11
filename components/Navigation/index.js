
import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

import CameraScreen from '../../screens/CameraScreen';
import MerchantScreen from '../../screens/MerchantScreen';
import CartContainer from '../Cart/CartContainer';

export default Navigator = TabNavigator({
    CameraScreen: {
        screen: CameraScreen,
        navigationOptions: () => ({
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="camera"
                    type="font-awesome"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    CartScreen: {
        screen: CartContainer,
        navigationOptions: () => ({
            title: 'Cart',
            tabBarIcon: ({tintColor}) => (
                <Icon
                    name="shopping-cart"
                    type="font-awesome"
                    color={tintColor}
                    size={24}
                />
            )
        })
    },
    MerchantScreen: {
      screen: MerchantScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="shopping-cart"
              type="font-awesome"
              color={tintColor}
              size={24}
          />
        )
      })
    }
  }, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#f2f2f2',
      activeBackgroundColor: '#2EC4B6',
      inactiveTintColor: '#666',
      showLabel: false
    }
  }
);