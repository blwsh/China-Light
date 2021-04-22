import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  menuItem: {
    display: 'flex',
    backgroundColor: 'white',
    borderRadius: 5,
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  blue: {color: '#3189c3'},
  green: {color: '#69c331'},
  gold: {color: '#ffa800'},
  grey: {color: '#a7b7b7'},
  lightGrey: {color: '#c5d0d0'},
  bold: {fontWeight: "bold"},
  pricePreDiscount: {color: 'grey', fontSize: 12, textDecorationLine: 'line-through', marginRight: 5},
  priceContainer: {flexDirection: 'row', alignItems: 'flex-end'}
});

export default styles;
