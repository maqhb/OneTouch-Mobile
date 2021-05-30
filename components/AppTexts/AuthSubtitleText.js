import React from 'react';
import {StyleSheet, Text} from 'react-native';
export default function HeadText(props) {
  return <Text style={styles.text}>{props.children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
});
