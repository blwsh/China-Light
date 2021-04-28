import * as React from "react";
import globalStyles from "../styles";
import {StyleSheet, View} from "react-native";
import {Text} from "./index";
import money from "../utils/money";

const Price: React.FC<{price: number, discountPrice?: number|null, fontSize?: number}> = ({price, discountPrice, fontSize = 16}) => {
  const styles = StyleSheet.create({
    price: {fontSize: fontSize},
    priceContainer: {flexDirection: 'row', alignItems: 'center'},
    pricePreDiscount: {color: 'grey', fontSize: fontSize * .7, textDecorationLine: 'line-through', marginRight: 5},
  });

  return (
    <View style={styles.priceContainer}>
      {(typeof discountPrice !== 'undefined' && discountPrice !== null) && (
        <Text style={styles.pricePreDiscount}>{money(price / 100)}</Text>
      )}
      <Text style={[globalStyles.bold, globalStyles.blue, styles.price]}>
        {money((discountPrice || price) / 100)}
      </Text>
    </View>
  )
}

export default Price;
