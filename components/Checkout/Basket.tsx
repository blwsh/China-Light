import * as React from "react";
import {Alert, TouchableOpacity, View} from "react-native";
import {Basket as BasketType, BasketItem} from "../../types";
import {Basket as BasketClass} from "../../classes";
import {Button, Heading} from "../";
import {BasketRow, BasketSummary} from "./index";

type Props = {
  basket: BasketType,
  onPress?: (item: BasketItem) => void
  onUpdate?: (basket: BasketType) => void
} & View['props'];

const Basket: React.FC<Props> = ({basket, onPress, onUpdate, ...props}) => {
  const onClearBasket = () => {
    Alert.alert(
      'Clear Basket?',
      'Are you sure you want to clear your basket?',
      [{text: "Cancel", style: "cancel"}, {text: "Clear Basket", onPress: () => onUpdate?.(new BasketClass())}]
    );
  }

  return <View {...props}>
    <Heading>Basket</Heading>

    {basket.items.map((item, key) => <BasketRow item={item} onPress={onPress}/>)}

    <BasketSummary basket={basket}/>

    <Button size="large" onPress={onClearBasket}>Clear Basket</Button>
  </View>
}

export default Basket;
