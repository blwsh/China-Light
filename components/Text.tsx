import React from "react";
import {StyleSheet, Text as ReactText, TextStyle} from "react-native";

type TextProps = {color?: string, weight?: TextStyle['fontWeight']} & ReactText['props'];

const Text: React.FC<TextProps> = (props) => {
  const {style, color, weight, ...otherProps} = props;
  const textStyle = StyleSheet.create({text: {fontSize: 15, color, fontWeight: weight}});
  return <ReactText style={[textStyle.text, style]} {...otherProps}/>
}

export default Text;
