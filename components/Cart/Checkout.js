import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import ItemsContainer from './ItemsContainer';
import BasketContainer from './BasketComponent';
import Footer from './Footer';

const Checkout = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header />
            <ItemsContainer />
            <BasketContainer />
            <Footer />
        </View>

    );
};

export default Checkout;
