import React from "react";
import {View} from "react-native";
import {Button, Restaurant, SubHeading} from "../index";
import {Product, ProductOptionGroup} from "../../types";

type Props = {
  group: ProductOptionGroup,
  selectedOptionsMap: {[key: string]: { [key: string]: Product[] }},
  onSelectOption: (group: ProductOptionGroup, item: Product) => void,
  onRemoveOption: (group: ProductOptionGroup, item: Product) => void,
};

const OptionsGroup: React.FC<Props> = ({selectedOptionsMap, group, onSelectOption, onRemoveOption}) => {
  return (
    <View>
      <SubHeading style={{marginTop: 50}}>{group.name} {group.limit > 0 ? `(Pick ${group.limit})` : null}</SubHeading>
      {group.options?.map((item, key) => {
        const selected = selectedOptionsMap[group.id]?.[item.id];

        return (
          <Restaurant.MenuItem
            key={key}
            product={item}
            quantitySelected={selected?.length}
            onPress={() => onSelectOption(group, item)}
            renderActions={group.limit !== 1 && selected?.length > 0 && (
              <Button size="small" color="crimson" style={{marginLeft: 10}} onPress={() => onRemoveOption(group, item)}>
                Remove
              </Button>
            )}
          />
        )
      })}
    </View>
  )
}

export default OptionsGroup;
