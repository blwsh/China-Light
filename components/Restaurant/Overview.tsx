import React from "react";
import {View} from "react-native";
import {Heading, Rating, Restaurant, Row, Text} from "../";
import {Restaurant as RestaurantType} from "../../types";

type OverviewProps = {restaurant: RestaurantType} & View['props'];

const Overview: React.FC<OverviewProps> = ({restaurant, ...props}) => {
  const {county, country, ...address} = restaurant.address;

  return <View style={{backgroundColor: 'white', width: '90%', marginTop: -25, borderRadius: 10}} {...props}>
    <View style={{alignItems: 'center', padding: 25}}>
      <Restaurant.Logo uri={restaurant.logoImage}/>

      <Heading>{restaurant.name}</Heading>

      <Row>
        <Rating rating={3.5} of={5}/>
        <Text color="#3189c3" weight="600">View 26 Reviews</Text>
      </Row>

      <Text style={{marginVertical: 10, textAlign: 'center'}}>{Object.values(address).join(', ')}</Text>
    </View>

    <Restaurant.OpeningHours hours={restaurant.hours}/>
  </View>
}

export default Overview;
