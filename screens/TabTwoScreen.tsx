import * as React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Text, TextInput} from "../components";


export default function TabTwoScreen() {
  return <ScrollView contentContainerStyle={{alignItems: 'center'}}>
    <View style={{width: '90%', marginHorizontal: 'auto'}}>
      <Text style={styles.subtitle}>General</Text>
      <TextInput placeholder="Email" value="ben@blw.sh"/>
      <TextInput placeholder="First Name" value="Ben"/>
      <TextInput placeholder="Last Name" value="Watson"/>
      <TextInput placeholder="Phone" value="+44 7446224772"/>
      <Text style={styles.subtitle}>Address</Text>
      <TextInput placeholder="Address Line 1" value="221 New Hey Road"/>
      <TextInput placeholder="Address Line 2" value=""/>
      <TextInput placeholder="Town" value="Huddersfield"/>
      <TextInput placeholder="City" value="Huddersfield"/>
      <TextInput placeholder="County" value="West Yorkshire"/>
      <TextInput placeholder="Post Code" value="HD3 4GD"/>
      <Text style={styles.subtitle}>Payment Method</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{paddingRight: 20}}>
          <TextInput style={styles.disabled} placeholder="Card" value="**** **** **** 4462" editable={false}/>
        </View>
        <TextInput style={styles.disabled} placeholder="Card" value="01/24" editable={false}/>
      </View>
    </View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  title: {fontSize: 28, marginVertical: 20, fontWeight: 'bold'},
  subtitle: {fontSize: 20, marginVertical: 15, fontWeight: 'bold'},
  disabled: {color: 'grey'}
});
