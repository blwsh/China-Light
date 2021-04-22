import React from "react";
import {Button, Image, Modal, TouchableOpacity, View} from "react-native";
import {Heading, Row, SubHeading, Text, TextInput} from "../components";
import {MenuItem} from "../types";
import styles from "../styles";
import money from "../utils/money";
import CloseButton from "./CloseButton";
import {Quantity} from "../components/Inputs";

type Props = {item: MenuItem, coverImage: string} & Modal['props'];

const AddMenuItemToBasket: React.FC<Props> = ({item, coverImage, ...otherProps}) => {
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

        {(item.options && item.options.length > 0) && <>
          <SubHeading style={{marginTop: 50}}>Options (Select One)</SubHeading>
          {item.options?.map((item, key) => (
            <TouchableOpacity key={key} accessible={true} accessibilityLabel="View opening times" onPress={() => {
            }}>
              <View style={[styles.menuItem, {padding: 5, marginVertical: 5}]}>
                <Text>{item.name}</Text>
                <View style={styles.priceContainer}>
                  <Text style={[styles.bold, styles.blue]}>{`+ ${money((item.price * .9) / 100)}`}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </>}

        <SubHeading style={{textAlign: 'center'}}>Quantity</SubHeading>

        <Quantity onChange={value => console.log(value)}/>

        <TouchableOpacity
          style={{backgroundColor: '#ffa800', padding: 20, marginVertical: 20, borderRadius: 10, alignItems: 'center'}}
          accessible={true} accessibilityLabel="View opening times" onPress={() => {
        }}>
          <Text style={{color: '#fff'}}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>;
}

export default AddMenuItemToBasket;
