import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
export default function AppButton({name, onPress, style, disabled}) {
  return (
    <Button
      onPress={onPress}
      style={[styles.button, style]}
      color={styles.button.color}
      labelStyle={[styles.buttonLabel, style]}
      disabled={disabled}
    >
      {name}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {
    color: '#FFFFFF',
    backgroundColor: '#26ABE2',
    borderRadius: 20,
  },
  buttonLabel: {
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
