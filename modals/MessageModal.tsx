import React from "react";
import {Modal, View} from "react-native";
import {Heading, Text} from "../components";
import CloseButton from "./CloseButton";

type Props = {heading?: string, message?: string} & Modal['props']

const MessageModal: React.FC<Props> = ({heading, message, style, ...props}) => {
  return <Modal {...props}>
    <CloseButton onPress={props.onRequestClose}/>
    <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      {heading && <Heading>{heading}</Heading>}
      {message && <Text>{message}</Text>}
    </View>
  </Modal>
}

export default MessageModal;
