import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen({
  navigation,
}: StackScreenProps<any, 'NotFound'>) {
  return (
    <View>
      <Text>This screen doesn't exist.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')}>
        <Text>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}
