import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {Image, ScrollView, View} from "react-native";
import {Loading, Restaurant} from '../components';
import {AddMenuItemToBasket} from "../modals";
import {Basket as BasketType, BasketItem, Product, Restaurant as RestaurantType} from "../types";
import Basket from "../components/Checkout/Basket";
import {Basket as BasketClass} from "../classes";

const ViewRestaurant: React.FC<ScrollView['props']> = props => {
  const [restaurant, setRestaurant] = useState<RestaurantType|null>(null);
  const [basket, setBasket] = useState<BasketType>(new BasketClass());
  const [basketItem, setBasketItem] = useState<Product|null>(null);

  useEffect(() => {
    setTimeout(() => setRestaurant(require('../restaurant.json')), 150);
  }, [restaurant]);

  const addToBasket = useCallback((item: BasketItem) => {
    basket.items = [...basket.items, item];
    setBasket(basket)
  }, [basket]);

  return restaurant ? <ScrollView contentContainerStyle={{alignItems: 'center'}} {...props}>
    <Image source={{uri: restaurant.coverImage}} style={{width: '100%', height: 260, resizeMode: 'cover'}}/>

    <Restaurant.Overview restaurant={restaurant}/>

    <View style={{paddingVertical: 25, width: '90%'}}>
      <Basket basket={basket} onPress={item => setBasketItem(item.product)} onUpdate={basket => setBasket(basket)}/>
      {restaurant.categories.map((category, key) => (
        <Restaurant.Category key={key} category={category} onPressMenuItem={item => setBasketItem(item)}/>
      ))}
      <Basket basket={basket} onPress={item => setBasketItem(item.product)} onUpdate={basket => setBasket(basket)}/>
    </View>

    <AddMenuItemToBasket
      item={basketItem!}
      visible={basketItem !== null}
      coverImage={restaurant.coverImage}
      onAddToBasket={item => addToBasket(item)}
      onRequestClose={() => setBasketItem(null)}
    />
  </ScrollView> : <Loading/>
}

export default ViewRestaurant
