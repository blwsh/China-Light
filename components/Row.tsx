import {View} from "react-native";
import React from "react";

const Row: React.FC<View['props']> = ({style, ...props}) => (
  <View style={[{flexDirection: 'row', alignItems: 'center'}, style]} {...props}/>
);

export default Row;
