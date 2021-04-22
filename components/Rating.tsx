import * as React from "react";
import {View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";

const Rating: React.FC<{rating: number, of?: number}> = ({rating, of}) => <View style={{flexDirection: 'row', marginRight: 10}}>
  {[...Array(Math.ceil(rating % 1 === 0 ? rating : rating - 1))].map((_, k) => <MaterialIcons key={k} name='star' style={{color: '#ffa800'}}/>)}
  {rating % 1 >= 0.5 && <MaterialIcons name='star-half' style={{color: '#ffa800'}}/>}
  {[...Array(Math.max(0, Math.floor(of || rating) - Math.ceil(rating)))].map((_, k) => <MaterialIcons key={k} name='star-outline' style={{color: '#c5d0d0'}}/>)}

</View>

export default Rating;
