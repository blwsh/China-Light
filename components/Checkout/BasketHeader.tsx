import React from "react";
import {Product} from "../../types";
import {Heading, Price, Row, Text} from "../index";

const BasketHeader: React.FC<{item: Product}> = ({item}) => {
  return <>
    <Row style={{justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 20}}>
      <Heading style={{flexShrink: 1, marginTop: 0}}>{item.name}</Heading>
      <Price fontSize={24} price={item.price} discountPrice={item.price * .9}/>
    </Row>

    <Text>{item.description}</Text>
  </>
}

export default BasketHeader;
