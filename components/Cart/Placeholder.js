import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const Placeholder = () => {
    return (
        <View style={{ flex: 1 }}>
            <Button
                title="Cart"
                buttonStyle={{ marginTop: 20 }}
            />
        </View>
    );
};

export default Placeholder;