import * as React from "react";
import {Text} from "../";
import styles from "../../styles";
import money from "../../utils/money";
import {MenuItem as MenuItemType} from "../../types";
import {TouchableOpacity, View} from "react-native";

const MenuItem: React.FC<{item: MenuItemType, onPress?: () => void} & View['props']> = props => {
  const {item, onPress, style, ...otherProps} = props;

  return (
    <TouchableOpacity
      accessible={true}
      onPress={onPress}
      accessibilityLabel={`Add ${item.name} to basket.`}
    >
      <View style={[styles.menuItem, style]} {...otherProps}>
        <Text>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.pricePreDiscount}>{money(item.price / 100)}</Text>
          <Text style={[styles.bold, styles.blue]}>{money((item.price * .9) / 100)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default MenuItem;
