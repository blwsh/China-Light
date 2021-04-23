import React, {useState} from "react";
import {Image, Modal, TouchableOpacity, View} from "react-native";
import {Button, Heading, Row, SubHeading, Text, TextInput} from "../components";
import {BasketItem, Product} from "../types";
import styles from "../styles";
import money from "../utils/money";
import CloseButton from "./CloseButton";
import {Quantity} from "../components/Inputs";

type Props = {item: Product, onAddToBasket: (item: BasketItem) => void, coverImage: string} & Modal['props'];

const AddMenuItemToBasket: React.FC<Props> = ({item, onAddToBasket, coverImage, ...otherProps}) => {
  const [quantity, setQuantity] = useState(1);
  const [options, setOptions] = useState<Product[]>([]);

  if (!item) return null;

  return <Modal animationType="slide" {...otherProps}>
    <View style={{alignItems: 'center'}}>
      <CloseButton onPress={otherProps.onRequestClose}/>
      <Image source={{uri: coverImage}} style={{width: '100%', height: 260, resizeMode: 'cover'}}/>
      <View style={{width: '90%', justifyContent: 'space-between'}}>
        <Row style={{justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 20}}>
          <Heading style={{flexShrink: 1, marginTop: 0}}>{item.name}</Heading>

          <Row style={{flexShrink: 0, alignItems: 'flex-start'}}>
            <Text style={[{textAlign: 'right'}, styles.pricePreDiscount]}>{money(item.price / 100)}</Text>
            <Text style={[{
              textAlign: 'right',
              fontSize: 22
            }, styles.bold, styles.blue]}>{money((item.price * .9) / 100)}</Text>
          </Row>
        </Row>

        <Text>{item.description}</Text>

        {(item.options && item.options.length > 0) &&
          item.options?.map((group, key) => <View key={key}>
            <SubHeading style={{marginTop: 50}}>{group.name} (Pick {group.limit})</SubHeading>
            {group.options?.map((item, key) => (
              <TouchableOpacity
                key={key} accessible={true} accessibilityLabel={item.name}
                onPress={() => setOptions([...options, item])}
              >
                <View style={[styles.menuItem, {padding: 5, marginVertical: 5}]}>
                  <Text>{item.name}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={[styles.bold, styles.blue]}>{`+ ${money((item.price * .9) / 100)}`}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>)}


        <SubHeading style={{textAlign: 'center'}}>Quantity</SubHeading>

        <Quantity value={quantity} onChange={value => setQuantity(value + 1)}/>
        <Button accessibilityLabel="Add to Basket" onPress={() => {
          onAddToBasket({product: item, quantity, options});
          otherProps.onRequestClose?.();
        }}>Add to Basket</Button>
      </View>
    </View>
  </Modal>;
}

export default AddMenuItemToBasket;
