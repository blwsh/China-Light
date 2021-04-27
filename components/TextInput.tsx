import React from "react";
import {StyleProp, StyleSheet, TextInput as BaseTextInput, View, ViewStyle} from "react-native";
import Text from "./Text";

type TextInputProps = { label?: string, containerStyle?: StyleProp<ViewStyle> } & BaseTextInput['props'];

const TextInput: React.FC<TextInputProps> = ({label, style, containerStyle, ...props}) => {
  return <View style={containerStyle}>
    {(label || props.placeholder) && <Text style={styles.label}>{label || props.placeholder}</Text>}
    <BaseTextInput style={[styles.input, style]} {...props}/>
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
  },
  input: {
    width: '100%',
    fontSize: 16,
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e9e9e9',
  }
})

export default TextInput;
