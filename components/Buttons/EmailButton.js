import React from 'react';
import {
  StyleSheet,
  Image,
  Button,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../../assets/colors';

export default function EmailButton({name, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 110,
    paddingVertical: 16,
    borderRadius: 30,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
  iconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
