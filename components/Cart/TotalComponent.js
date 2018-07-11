import React from 'react';
import { View, Text } from 'react-native';

const TotalComponent = () => {
  const { containerStyle, totalStyle } = styles;
  return (
    <View style={containerStyle}>
      <View style={totalStyle}>
        <Text>Total - </Text>
        <Text>$17</Text>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15
  },
  totalStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
};


export default TotalComponent;
