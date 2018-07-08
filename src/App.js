import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';

import CameraScreen from './screens/CameraScreen'
//import PurchaseScreen from './screens/PurchaseScreen'

/*
export default const App = StackNavigator({
  Camera: { screen: CameraScreen }
});
*/

AppRegistry.registerComponent('ReactNativeARKit', () => CameraScreen)