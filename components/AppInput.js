import React from 'react';
import {StyleSheet, TextInput, Keyboard} from 'react-native';

export default function AppInput({placeholder, onChangeText, style}) {
  return (
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      style={[styles.input, style]}
      multiline={true}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    color: '#31476B',
    fontSize: 16,
    borderColor: '#31476B',
  },
});
