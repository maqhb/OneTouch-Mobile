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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FacebookButton({name, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Icon
          name="facebook"
          size={30}
          color="#26ABFF"
          style={styles.iconStyle}
        />
        <Text style={styles.buttonText}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 30,
    marginBottom: 20,
  },
  iconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  buttonText: {
    color: '#26ABFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
