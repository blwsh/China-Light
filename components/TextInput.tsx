import React from "react";
import {StyleSheet, TextInput as BaseTextInput, View} from "react-native";
import Text from "./Text";

type TextInputProps = { label?: string, ref?: React.Ref<any> } & BaseTextInput['props'];

const TextInput: React.FC<TextInputProps> = (props) => {
  const {label, ref, ...otherProps} = props;

  return <View>
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
