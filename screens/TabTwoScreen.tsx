import * as React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Text, TextInput} from "../components";


export default function TabTwoScreen() {
  return <ScrollView contentContainerStyle={{alignItems: 'center'}}>
    <View style={{width: '90%', marginHorizontal: 'auto'}}>
      <Text style={styles.subtitle}>General</Text>
      <TextInput style={styles.input} placeholder="Email" value="ben@blw.sh"/>
      <TextInput style={styles.input} placeholder="First Name" value="Ben"/>
      <TextInput style={styles.input} placeholder="Last Name" value="Watson"/>
      <TextInput style={styles.input} placeholder="Phone" value="+44 7446224772"/>
      <Text style={styles.subtitle}>Address</Text>
      <TextInput style={styles.input} placeholder="Address Line 1" value="221 New Hey Road"/>
      <TextInput style={styles.input} placeholder="Address Line 2" value=""/>
      <TextInput style={styles.input} placeholder="Town" value="Huddersfield"/>
      <TextInput style={styles.input} placeholder="City" value="Huddersfield"/>
      <TextInput style={styles.input} placeholder="County" value="West Yorkshire"/>
      <TextInput style={styles.input} placeholder="Post Code" value="HD3 4GD"/>
      <Text style={styles.subtitle}>Payment Method</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{paddingRight: 20}}>
          <TextInput style={[styles.input, styles.disabled]} placeholder="Card" value="**** **** **** 4462" editable={false}/>
        </View>
        <TextInput style={[styles.input, styles.disabled]} placeholder="Card" value="01/24" editable={false}/>
      </View>
    </View>
  </ScrollView>;
}

const styles = StyleSheet.create({
  title: {fontSize: 28, marginVertical: 20, fontWeight: 'bold'},
  subtitle: {fontSize: 20, marginVertical: 15, fontWeight: 'bold'},
  input: {
    width: '100%',
    fontSize: 16,
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#e9e9e9',
  },
  disabled: {
    color: 'grey'
  }
});
