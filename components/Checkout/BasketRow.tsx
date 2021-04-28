import * as React from "react";
import {BasketItem} from "../../types";
import {TouchableOpacity} from "react-native";
import {Text} from "../index";
import money from "../../utils/money";

type Props = {item: BasketItem, onPress?: (item: BasketItem) => void}

const BasketRow: React.FC<Props> = ({item, onPress}) => {
  return <TouchableOpacity style={{marginVertical: 5}} onPress={() => onPress?.(item)}>
    <Text style={{marginBottom: 5}}>{item.quantity} x {item.product.name} ({money(item.price / 100)})</Text>
    {item.options.map((option, key) => (
      <Text key={key} style={{marginLeft: 20}}> - {option.name} + {money(option.price / 100)}</Text>
    ))}
  </TouchableOpacity>
}

export default BasketRow;
