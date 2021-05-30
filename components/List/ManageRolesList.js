import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../AppTexts/AppText';

export default function ManageRolesList({Name, Role, onPress}) {
  return (
    <View style={styles.itemView} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View
          style={{
            width: 5,
            height: '90%',
            backgroundColor: '#26ABFF',
            borderRadius: 10,
          }}
        />
        <AppText style={styles.nameText}>{Name}</AppText>
      </View>
      <View style={styles.textView}>
        <AppText style={styles.roleText}>{Role}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
  iconContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#554E8F',
    paddingLeft: 40,
  },
  roleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#554E8F',
    paddingLeft: 20,
  },
});
