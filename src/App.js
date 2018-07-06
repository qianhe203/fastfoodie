import { AppRegistry } from 'react-native'

import CameraPane from './camera'
import PurchasePane from './purchase'

const FastFoodie = StackNavigator({
  Camera: { screen: CameraPane },
  Purchase: { screen: PurchasePane }
})

AppRegistry.registerComponent('FastFoodie', () => FastFoodie)