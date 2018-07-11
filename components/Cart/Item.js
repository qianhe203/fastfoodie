import React, { Component } from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const image1 = require('../../assets/food-9.jpg');
const image2 = require('../../assets/burger.jpg');
const image3 = require('../../assets/fruitsalad.jpg');

const items = [
    {
        id: 1,
        image: image1,
        name: 'Panner Chili',
        price: 9,
        amountTaken: 1
    }, {
        id: 2,
        image: image2,
        name: 'Burger',
        price: 5,
        amountTaken: 1
    }, {
        id: 4,
        image: image3,
        name: 'Fruit Salad',
        price: 3,
        amountTaken: 1
    },
];

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    console.log(item)
    // let index = items.findIndex(el => el.name === item.name);
    // let newAmount = item.amountTaken++;
    // let newPrice = newAmount * item.price/newAmount;
    // items[index] = {...items[index], amountTaken: newAmount};
    // items[index] = {...items[index], price: newPrice};
  }

  _renderItem({ item, index }) {
    const { 
      containerStyle, 
      lastItemStyle,
      imageStyle, 
      textStyle, 
      counterStyle,
      priceStyle } = styles;

    return (
    <View style={(index + 1 === items.length) ? lastItemStyle : containerStyle}>
      <Image source={item.image} style={imageStyle} />
      
      <View style={textStyle}>
        <Text style={{ color: '#2e2f30' }}>{item.name}</Text>
        <View style={priceStyle}>
          <Text style={{ color: '#2e2f30', fontSize: 12 }}>${item.price}</Text>
        </View>
      </View>

      <View style={counterStyle}>
        <Icon.Button 
          name="ios-remove" 
          size={25} 
          color='#fff' 
          backgroundColor='#fff' 
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }} 
          iconStyle={{ marginRight: 0 }}
          onclick={(e) => this.addItem(e)}
        />

        <Text>{item.amountTaken}</Text>

        <Icon.Button 
          name="ios-add" 
          size={25} 
          color='#fff' 
          backgroundColor='#fff' 
          style={{ borderRadius: 15, backgroundColor: '#bbb', height: 30, width: 30 }} 
          iconStyle={{ marginRight: 0 }}
          onclick={(e) => this.addItem(e)}
        />

      </View>
    </View>);
  }


  render() {
    return (
      <FlatList
        data={items}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  lastItemStyle: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    paddingLeft: 15,
    backgroundColor: '#fff'
  },
  imageStyle: {
    width: 50, 
    height: 50, 
    marginRight: 20
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center'
  },
  priceStyle: {
    backgroundColor: '#ddd',
    width: 40,
    alignItems: 'center',
    marginTop: 3,
    borderRadius: 3
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
};

export default Item;
