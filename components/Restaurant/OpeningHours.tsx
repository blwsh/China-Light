import React, {useState} from "react";
import {TouchableOpacity, View} from "react-native";
import {Text} from "../index";
import styles from "../../styles";
import {MaterialIcons} from "@expo/vector-icons";
import {OpeningHours as OpeningHoursType} from "../../types";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const OpeningHours: React.FC<{hours: OpeningHoursType[]}> = ({hours}) => {
  const [toggleOpeningTimes, setToggleOpeningTimes] = useState<boolean>(false);

  return (
    <View>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="View opening times"
        onPress={() => setToggleOpeningTimes(!toggleOpeningTimes)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fafcff',
            borderTopWidth: 1,
            borderTopColor: '#ddd',
            borderBottomEndRadius: 10,
            borderBottomStartRadius: 10,
            padding: 25
          }}>
          <Text style={[styles.green, styles.bold]}>Open Now</Text>
          <MaterialIcons name='date-range' style={{fontSize: 18, color: 'grey'}}/>
        </View>
      </TouchableOpacity>

      {toggleOpeningTimes && <View style={{padding: 25}}>
        {hours.map((hours, key) => <View key={key} style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 2
        }}>
          <Text style={{textAlign: 'left'}}>{days[hours.day - 1]}</Text>
          <Text style={{
            textAlign: 'right',
            fontWeight: 'bold'
          }}>{hours.from && hours.to ? `${hours.from} - ${hours.to}` : 'Closed'}</Text>
        </View>)}
      </View>}
    </View>
  );
}

export default OpeningHours;
