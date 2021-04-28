import React, {useCallback, useState} from "react";
import {setWith} from "lodash";
import {Image, KeyboardAvoidingView, Modal, ScrollView, View} from "react-native";
import {Button} from "../components";
import {Product, ProductOptionGroup} from "../types";
import CloseButton from "./CloseButton";
import {Quantity} from "../components/Inputs";
import BasketHeader from "../components/Checkout/BasketHeader";
import OptionsGroup from "../components/Checkout/OptionsGroup";
import {BasketItem} from "../classes";

type Props = { item: Product, onAddToBasket: (item: BasketItem) => void, coverImage: string } & Modal['props'];

const AddMenuItemToBasket: React.FC<Props> = ({item, onAddToBasket, onRequestClose, coverImage, ...props}) => {
  if (!item) return null;

  /**
   * State
   */
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState<{[key: string]: { [key: string]: Product[] }}>({});

  /**
   * Handlers
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

  const onRemoveOption = useCallback((group: ProductOptionGroup, item: Product) => {
    options[group.id][item.id] = options[group.id][item.id].splice(1);
    setOptions({...options})
  }, [options]);

  const onSubmit = useCallback(() => {
    let optionsArray: Product[] = [];

    Object.values(options).forEach(group => Object.values(group).forEach(items => {
      optionsArray = [...optionsArray, ...items];
    }));

    onAddToBasket(new BasketItem({
      product: item,
      quantity: quantity,
      options: optionsArray
    }));

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
          <BasketHeader item={item}/>

          {(item.options && item.options.length > 0) && item.options?.map((group, key) => (
            <OptionsGroup key={key} group={group} selectedOptionsMap={options} onSelectOption={onSelectOption} onRemoveOption={onRemoveOption}/>
          ))}

          <Quantity style={{marginVertical: 20}} value={quantity} max={10} onChange={value => setQuantity(value + 1)}/>

          <Button size="large" style={{marginBottom: 10}} onPress={onSubmit}>Add to Basket</Button>

          <Button size="large" color="transparent" textColor="red" style={{borderWidth: 1, borderColor: 'red', marginBottom: 10}} onPress={() => onRequestClose?.()}>Cancel</Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  </Modal>;
}

export default AddMenuItemToBasket;
