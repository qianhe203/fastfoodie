
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CameraScreen from './src/screens/CameraScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CameraScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});