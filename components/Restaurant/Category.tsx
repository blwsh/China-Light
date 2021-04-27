import * as React from "react";
import {View} from "react-native";
import {Restaurant, SubHeading} from "../";
import {Product, RestaurantCategory} from "../../types";

type CategoryProps = {category: RestaurantCategory, onPressMenuItem?: (item: Product) => void} & View['props'];

const Category: React.FC<CategoryProps> = ({category, onPressMenuItem, ...props}) => {
  return <View {...props}>
    <SubHeading>{category.name}</SubHeading>
    {category.items.map((item, key) => (
      <Restaurant.MenuItem key={key} product={item} onPress={() => onPressMenuItem?.(item)}/>
    ))}
  </View>
}

export default Category;
