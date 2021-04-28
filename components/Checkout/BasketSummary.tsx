import * as React from "react";
import {Basket} from "../../types";
import {View} from "react-native";
import {Text} from "../index";
import money from "../../utils/money";

const BasketSummary: React.FC<{basket: Basket}> = ({basket}) => {
  return <View style={{marginVertical: 20}}>
    <Text>Subtotal: <Text weight="bold">{money(basket.subtotal / 100)}</Text></Text>
    {basket.subtotal > 0 && <Text>Deliver: <Text weight="bold">{money(200 / 100)}</Text></Text>}
    <Text>Service Charge: <Text weight="bold">FREE</Text></Text>
    {basket.subtotal > 0 && <Text style={{marginVertical: 20}}>Total: <Text weight="bold">{money((basket.subtotal / 100) + (200 / 100))}</Text></Text>}
  </View>
}

export default BasketSummary;
