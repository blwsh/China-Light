import React, {useCallback, useRef, useState} from "react";
import {Button} from "react-native";
import {Row, TextInput} from "../index";

type Props = {value?: number, max?: number, onChange?: (value: number) => void}

const Quantity: React.FC<Props> = ({value = 1, max, onChange}) => {
  const [quantity, setQuantity] = useState(value);

  const dispatch = useCallback((action: string) => {
    if (action === 'increment') setQuantity(max && quantity >= max ? max : quantity + 1)
    if (action === 'decrement') setQuantity(quantity > 1 ? quantity - 1 : 1)
    onChange?.(quantity)
  }, [quantity])

  return <Row style={{justifyContent: 'center'}}>
    <Button title={'-'} onPress={() => dispatch('decrement')}/>
    <TextInput value={quantity.toString()}/>
    <Button title={'+'} onPress={() => dispatch('increment')}/>
  </Row>
}

export default Quantity;
