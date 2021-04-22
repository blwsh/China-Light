import React from "react";
import {MaterialIcons} from "@expo/vector-icons";

const CloseButton: React.FC<{onPress?: () => void}> = props => {
  return <MaterialIcons
    name='close'
    style={[{
      position: 'absolute',
      color: 'white',
      textShadowRadius: 10,
      textShadowColor: 'rgba(48,48,48,.5)',
      fontSize: 48,
      top: 40,
      right: 24,
      zIndex: 1000
    }]}
    {...props}
  />;
}

export default CloseButton;
