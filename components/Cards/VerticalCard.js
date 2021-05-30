import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import AppText from '../AppTexts/AppText';
import Ionicons from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('screen');
export default function VerticalCard({
  title,
  name,
  cardStyle,
  iconStyle,
  color,
}) {
  return (
    <View style={[styles.cardView, cardStyle]}>
      <View style={[styles.iconView, iconStyle]}>
        <Ionicons name={name} color={color} size={40} />
      </View>
      <AppText style={styles.text}>{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    width: width / 2.5,
    height: 220,
    backgroundColor: '#ffffff',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 5,
    borderRadius: 10,
  },
  iconView: {
    width: '40%',
    height: '30%',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 5,
  },
  text: {
    color: '#686868',
    fontSize: 18,
    textTransform: 'uppercase', 
    fontFamily: 'Poppins-Medium',
  },
});
