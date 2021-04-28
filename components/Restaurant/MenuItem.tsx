import * as React from "react";
import {Price, Text} from "../";
import {BasketItem, Product} from "../../types";
import {StyleSheet, TouchableOpacity, View} from "react-native";

type Props = {
  item: BasketItem,
  quantity?: number,
  onPress?: () => void
  renderActions?: JSX.Element|null|false
} & View['props'];

const MenuItem: React.FC<Props> = ({item, quantity, onPress, renderActions, style, ...props}) => {
  return item ? (
    <TouchableOpacity accessible={true} onPress={onPress} style={styles.container}>
      <View style={[styles.menuItem, style]} {...props}>
        <Text weight={quantity ? 'bold' : 'normal'}>
          {typeof quantity !== 'undefined' && quantity > 0 ? `${quantity} x ` : null} {item.product.name}
        </Text>
        <View style={styles.info}>
          <Price price={item.product.price} discountPrice={item.product.price * .9}/>
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
