import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import ItemsContainer from './ItemsContainer';
import Footer from './Footer';

const CartContainer = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header/>
            <ItemsContainer />
            <Footer />
        </View>

    );
};

export default CartContainer;
