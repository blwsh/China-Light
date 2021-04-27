import * as React from "react";
import money from "../../utils/money";
import {Alert, TouchableOpacity, View} from "react-native";
import {Basket as BasketType, BasketItem} from "../../types";
import {Basket as BasketClass} from "../../classes";
import {Button, Heading, Text} from "../";

type Props = {
  basket: BasketType,
  onPress?: (item: BasketItem) => void
  onUpdate?: (basket: BasketType) => void
} & View['props'];

const Basket: React.FC<Props> = ({basket, onPress, onUpdate, ...props}) => {
  return <View {...props}>
    <Heading>Basket</Heading>

    {basket.items.map((item, key) => (
      <TouchableOpacity key={key} onPress={() => onPress?.(item)}>
        <Text>{item.quantity} x {item.product.name} ({money((item.product.price / 100) * item.quantity)})</Text>
        {item.options.map((option, key) => (
          <Text key={key}> - {option.name} + {money(option.price / 100)}</Text>
        ))}
      </TouchableOpacity>
    ))}

    <Text> </Text>
    <Text>Subtotal: <Text weight="bold">{money(basket.subtotal / 100)}</Text></Text>
    {basket.subtotal > 0 && <Text>Deliver: <Text weight="bold">{money(200 / 100)}</Text></Text>}
    <Text>Service Charge: <Text weight="bold">FREE</Text></Text>

    <Text> </Text>
    {basket.subtotal > 0 && <Text>Total: <Text weight="bold">{money((basket.subtotal / 100) + (200 / 100))}</Text></Text>}

    <Button
      onPress={() => Alert.alert(
        'Clear Basket?',
        'Are you sure you want to clear your basket?',
        [{text: "Cancel", style: "cancel"}, {text: "Clear Basket", onPress: () => onUpdate?.(new BasketClass())}]
      )}
    >Clear Basket</Button>
  </View>
}

export default Basket;
