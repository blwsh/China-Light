import React, {useCallback, useRef, useState} from "react";
import {StyleSheet, View} from "react-native";
import {Button, Row, TextInput} from "../index";

type Props = {value?: number, max?: number, onChange?: (value: number) => void}

const Quantity: React.FC<Props> = ({value = 1, max, onChange}) => {
  const [quantity, setQuantity] = useState(value);

  const dispatch = useCallback((action: string) => {
    if (action === 'increment') setQuantity(max && quantity >= max ? max : quantity + 1)
    if (action === 'decrement') setQuantity(quantity > 1 ? quantity - 1 : 1)
    onChange?.(quantity)
  }, [quantity])

  return <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Row style={{borderWidth: 1, borderColor: '#ddd', borderRadius: 12}}>
      <Button style={[styles.base, styles.noRadius, styles.radiusLeft]} onPress={() => dispatch('decrement')}>-</Button>
      <TextInput editable={false} style={[styles.base]} containerStyle={{minWidth: 80}} value={quantity.toString()}/>
      <Button style={[styles.base, styles.noRadius, styles.radiusRight]} onPress={() => dispatch('increment')}>+</Button>
    </Row>
  </View>
}

const styles = StyleSheet.create({
  base: {padding: 10, marginVertical: 0, textAlign: 'center'},
  noRadius: {borderRadius: 0},
  radiusLeft: {borderTopLeftRadius: 10,borderBottomLeftRadius: 10},
  radiusRight: {borderTopRightRadius: 10,borderBottomRightRadius: 10},
});

export default Quantity;
