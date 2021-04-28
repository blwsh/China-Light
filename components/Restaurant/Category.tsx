import * as React from "react";
import {View} from "react-native";
import {Restaurant, SubHeading} from "../";
import {RestaurantCategory} from "../../types";
import {BasketItem} from "../../classes";

type CategoryProps = {category: RestaurantCategory, onPressMenuItem?: (item: BasketItem) => void} & View['props'];

const Category: React.FC<CategoryProps> = ({category, onPressMenuItem, ...props}) => {
  return <View {...props}>
    <SubHeading>{category.name}</SubHeading>
    {category.items.map((item, key) => (
      <Restaurant.MenuItem
        key={key}
        item={new BasketItem({product: item})}
        onPress={() => onPressMenuItem?.(new BasketItem({product: item}))}
      />
    ))}
  </View>
}

export default Category;
