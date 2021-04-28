import * as React from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import {Text, TextInput} from "../components";
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

export default function TabTwoScreen() {
  const origin = {latitude: 53.6546552, longitude: -1.8332872};
  const destination = {latitude: 53.6407513, longitude: -1.8286269};

  return <ScrollView contentContainerStyle={{alignItems: 'center'}}>
    <MapView
      zoomEnabled={false}
      rotateEnabled={false}
      toolbarEnabled={false}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta: 0.075,
        longitudeDelta: 0.05,
      }}
      style={{
        width: '100%',
        height: 300
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey="AIzaSyAyMK_c3GcQQnw9zaucs-1VOjyXOKaxUXI"
        strokeWidth={3}
        strokeColor="hotpink"
      />
    </MapView>

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
