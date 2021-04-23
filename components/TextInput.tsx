import React from "react";
import {StyleProp, StyleSheet, TextInput as BaseTextInput, View, ViewStyle} from "react-native";
import Text from "./Text";

type TextInputProps = { label?: string, containerStyle?: StyleProp<ViewStyle> } & BaseTextInput['props'];

const TextInput: React.FC<TextInputProps> = (props) => {
  const {label, containerStyle, ...otherProps} = props;

  return <View style={containerStyle}>
    {(label || otherProps.placeholder) && <Text style={styles.label}>{label || otherProps.placeholder}</Text>}
    <BaseTextInput {...otherProps}/>
  </View>
}

const styles = StyleSheet.create({
  label: {
    top: 4,
    fontSize: 12,
    position: 'absolute',
    backgroundColor: 'white',
    paddingHorizontal: 4, paddingVertical: 2,
    marginHorizontal: 8,
    borderRadius: 4,
    zIndex: 1
  }
})

export default TextInput;
