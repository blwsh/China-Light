import {ActivityIndicator, View, StyleSheet} from "react-native";
import React from "react";

type Props = {size?: number|'small'|'large'} & View['props'];

const Loading: React.FC<Props> = ({size = 'small'}) => <View style={[styles.container, styles.horizontal]}>
  <ActivityIndicator size={size}/>
</View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default Loading;
