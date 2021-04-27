import React, {useCallback, useState} from "react";
import {ColorValue, StyleProp, StyleSheet, TextInput, View, ViewStyle} from "react-native";
import {Button, Row} from "../index";

type Props = {value?: number,
  max?: number,
  accent?: ColorValue,
  style?: StyleProp<ViewStyle>,
  onChange?: (value: number) => void
}

const Quantity: React.FC<Props> = ({value = 1, max, accent, style, onChange}) => {
  const [quantity, setQuantity] = useState(value);

  const canIncrement = useCallback(() => {
    return !(max && quantity >= max);
  }, [quantity])

  const canDecrement = useCallback(() => {
    return quantity > 1;
  }, [quantity])

  const changeQuantity = useCallback((action: string) => {
    if (action === 'increment' && canIncrement()) setQuantity(quantity + 1);
    if (action === 'decrement' && canDecrement()) setQuantity( quantity - 1);
    onChange?.(quantity)
  }, [quantity])

  return <View style={[styles.container, style]}>
    <Row style={styles.inner}>
      <Button style={[styles.base, styles.noRadius, styles.radiusLeft, accent ? {backgroundColor: accent} : {}]} onPress={() => changeQuantity('decrement')}>-</Button>
      <TextInput editable={false} style={[styles.base]} value={quantity.toString()}/>
      <Button style={[styles.base, styles.noRadius, styles.radiusRight, accent ? {backgroundColor: accent} : {}]} onPress={() => changeQuantity('increment')}>+</Button>
    </Row>
  </View>
}

const styles = StyleSheet.create({
  base: {padding: 10, marginVertical: 0, textAlign: 'center'},
  container: {justifyContent: 'center', alignItems: 'center'},
  inner: {borderWidth: 1, borderColor: '#ddd', borderRadius: 12},
  noRadius: {borderRadius: 0},
  radiusLeft: {borderTopLeftRadius: 10,borderBottomLeftRadius: 10},
  radiusRight: {borderTopRightRadius: 10,borderBottomRightRadius: 10},
});

export default Quantity;
