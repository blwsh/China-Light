import * as React from "react";
import {Text} from "./index";
import {Text as ReactText} from "react-native";

const Heading: React.FC<ReactText['props']> = props => {
  const {style, ...otherProps} = props;

  return <Text style={[{fontSize: 28, marginVertical: 20, fontWeight: 'bold'}, style]} {...otherProps}>
    {props.children}
  </Text>
}

export default Heading;
