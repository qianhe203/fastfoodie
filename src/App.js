import { AppRegistry } from 'react-native'
import { StackNavigator } from 'react-navigation'

import CameraScreen from './screens/CameraScreen'
import PurchaseScreen from './screens/PurchaseScreen'

const FastFoodie = StackNavigator({
  Camera: { screen: CameraScreen },
  Purchase: { screen: PurchaseScreen }
})

AppRegistry.registerComponent('ReactNativeARKit', () => FastFoodie)