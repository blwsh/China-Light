import {Text} from "./index";
import {TouchableOpacity} from "react-native";
import React from "react";

const Button: React.FC<TouchableOpacity['props']> = ({style, ...props}) => (
  <TouchableOpacity
    style={[
      {
        backgroundColor: '#ffa800',
        padding: 20,
        marginVertical: 20,
        borderRadius: 10,
        alignItems: 'center'
      },
      style,
    ]}
    accessible={true}
    {...props}
  >
    <Text style={{color: '#fff'}}>{props.children}</Text>
  </TouchableOpacity>
);

export default Button
