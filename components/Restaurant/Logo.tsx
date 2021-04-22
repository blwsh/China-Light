import {Image} from "react-native";
import React from "react";

const Logo: React.FC<{uri: string}> = ({uri}) => <Image
  source={{uri}}
  style={{width: 150, height: 150, marginTop: -100, resizeMode: 'contain'}}
/>

export default Logo;
