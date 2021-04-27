import {Text} from "./index";
import {ColorValue, StyleSheet, TouchableOpacity} from "react-native";
import React from "react";

type Props = {size?: 'small'|'regular'|'large'|null, color?: ColorValue, textColor?: ColorValue} & TouchableOpacity['props']

const Button: React.FC<Props> = ({style, size, color, textColor, ...props}) => {
  const styles = StyleSheet.create({
    button: {backgroundColor: color || '#ffa800', alignItems: 'center', borderRadius: 10},
    small: {padding: 5, paddingVertical: 2, borderRadius: 5},
    regular: {padding: 10},
    large: {padding: 20},
  });

  return <TouchableOpacity style={[styles.button, styles[size || 'regular'], style]} accessible={true} {...props}>
    <Text style={{color: textColor || '#fff'}}>{props.children}</Text>
  </TouchableOpacity>
};

export default Button
