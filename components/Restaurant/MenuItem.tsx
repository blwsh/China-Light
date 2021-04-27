import * as React from "react";
import {Price, Text} from "../";
import {Product} from "../../types";
import {StyleSheet, TouchableOpacity, View} from "react-native";

type Props = {
  product: Product,
  quantitySelected?: number|undefined,
  onPress?: () => void
  renderActions?: JSX.Element|null|false
} & View['props'];

const MenuItem: React.FC<Props> = ({product, quantitySelected, onPress, renderActions, style, ...props}) => {
  return product ? (
    <TouchableOpacity
      accessible={true}
      onPress={onPress}
      style={styles.container}
      accessibilityLabel={`Add ${product.name} to basket.`}
    >
      <View style={[styles.menuItem, style]} {...props}>
        <Text weight={quantitySelected ? 'bold' : 'normal'}>
          {typeof quantitySelected !== 'undefined' && quantitySelected > 0
            ? `${quantitySelected} x `
            : null} {product.name}
        </Text>
        <View style={styles.info}>
          <Price price={product.price} discountPrice={product.price * .9}/>
          {typeof renderActions !== 'undefined' && (
            <View>
              {renderActions}
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex'
  },
  menuItem: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 5,
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export default MenuItem;
