import * as React from 'react';
import {useState} from "react";
import {Image, ScrollView, View} from "react-native";
import {Restaurant} from '../components';
import AddMenuItemToBasket from "../modals/AddMenuItemToBasket";
import {MenuItem, Restaurant as RestaurantType} from "../types";

const restaurant: RestaurantType = require('../restaurant.json');

const TabOneScreen: React.FC<ScrollView['props']> = props => {
  // State
  const [basketItem, setBasketItem] = useState<MenuItem|null>(null);

  return <ScrollView contentContainerStyle={{alignItems: 'center'}} {...props}>
    <Image source={{uri: restaurant.coverImage}} style={{width: '100%', height: 260, resizeMode: 'cover'}}/>

    {/* Show overview of restaurant. Includes name, description, ratings, address and opening times. */}
    <Restaurant.Overview restaurant={restaurant}/>

    {/* List Menu Items by Category */}
    <View style={{paddingVertical: 25, width: '90%'}}>
      {restaurant.categories.map((category, key) => (
        <Restaurant.Category key={key} category={category} onPressMenuItem={item => setBasketItem(item)}/>
      ))}
    </View>

    {/* Add to basket modal */}
    {basketItem !== null && (
      <AddMenuItemToBasket
        item={basketItem}
        coverImage={restaurant.coverImage}
        onRequestClose={() => setBasketItem(null)}
      />
    )}
  </ScrollView>
}

export default TabOneScreen
