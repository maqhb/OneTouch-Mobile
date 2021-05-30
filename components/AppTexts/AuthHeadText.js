import React from 'react';
import {StyleSheet, Text} from 'react-native';
export default function AuthHeadText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 35,
  },
});
