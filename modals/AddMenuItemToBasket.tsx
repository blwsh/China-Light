import React, {useCallback, useState} from "react";
import {setWith} from "lodash";
import {Image, KeyboardAvoidingView, Modal, ScrollView, View} from "react-native";
import {Button} from "../components";
import {BasketItem, OptionsMap, Product, ProductOptionGroup} from "../types";
import CloseButton from "./CloseButton";
import {Quantity} from "../components/Inputs";
import BasketHeader from "../components/Checkout/BasketHeader";
import OptionsGroup from "../components/Checkout/OptionsGroup";

type Props = {
  item: BasketItem,
  onAddToBasket: (item: BasketItem) => void,
  onUpdateBasketItem: (item: BasketItem) => void,
  coverImage: string
} & Modal['props'];

const AddMenuItemToBasket: React.FC<Props> = ({item, onAddToBasket, onUpdateBasketItem, onRequestClose, coverImage, ...props}) => {
  if (!item) return null;

  /**
   * State
   */
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const [options, setOptions] = useState<OptionsMap>(item.optionsMap || {});

  /**
   * Adds selected option to options object.
   */
  const onSelectOption = useCallback((group: ProductOptionGroup, item: Product) => {
    const originalOptions: Product[] = options?.[group.id]?.[item.id] || [];

    if (group.limit <= 0 || originalOptions.length < group.limit) {
      if (group.limit === 1) {
        setOptions({...setWith(options, `[${group.id}]`, [])});
      }

      setOptions({...setWith(options, `[${group.id}][${item.id}]`, [...originalOptions, item])});
    }
  }, [options]);

  /**
   * Removes an option from the item.
   */
  const onRemoveOption = useCallback((group: ProductOptionGroup, item: Product) => {
    options[group.id][item.id] = options[group.id][item.id].splice(1);
    setOptions({...options})
  }, [options]);

  /**
   * Handle submitting new basket items and updating existing ones.
   */
  const onSubmit = useCallback(() => {
    // We want to flatten the options object to a simple array of products.
    let optionsArray: Product[] = [];
    Object.values(options).forEach(group => Object.values(group).forEach(items => {
      optionsArray = [...optionsArray, ...items];
    }));

    // We clone the item so we don't manipulate the original one by mistake.
    const updatedItem = {...item};

    // Then set the updates values for the basket item
    updatedItem.quantity = quantity;
    updatedItem.options = optionsArray;
    updatedItem.optionsMap = options;

    // Call onAddToBasket if the basket item is new (not yet in the basket) otherwise, call onUpdateBasket.
    if (!updatedItem.exists) {
      updatedItem.exists = true;
      onAddToBasket(updatedItem)
    } else {
      onUpdateBasketItem(updatedItem)
    }

    // Finally, close the modal.
    onRequestClose?.();
  }, [quantity, options]);

  /**
   * Render
   */
  return <Modal animationType="slide" {...props}>
    <KeyboardAvoidingView behavior="padding">
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <CloseButton onPress={onRequestClose}/>
        <Image source={{uri: coverImage}} style={{width: '100%', height: 130, resizeMode: 'cover'}}/>

        <View style={{width: '90%', justifyContent: 'space-between'}}>
          <BasketHeader item={item.product}/>

          {(item.product.options && item.product.options.length > 0) && item.product.options?.map((group, key) => (
            <OptionsGroup key={key} group={group} selectedOptionsMap={options} onSelectOption={onSelectOption} onRemoveOption={onRemoveOption}/>
          ))}

          <Quantity
            max={10}
            value={quantity}
            style={{marginVertical: 20}}
            onChange={value => setQuantity(value + 1)}
          />

          <Button size="large" style={{marginBottom: 10}} onPress={onSubmit}>
            {item.exists ? 'Update Basket' : 'Add to Basket'}
          </Button>

          <Button size="large" color="transparent" textColor="red" style={{borderWidth: 1, borderColor: 'red', marginBottom: 10}} onPress={() => onRequestClose?.()}>Cancel</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </Modal>;
}

export default AddMenuItemToBasket;
