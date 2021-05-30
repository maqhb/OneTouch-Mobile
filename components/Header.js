// Native Imports
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import HeadText from './AppTexts/HeadText';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Assets Imports
import Logo from '../assets/svgs/logo.svg';

export default function Header({screenName, hasBack, navigation, settings}) {
  return (
    <View style={styles.header}>
      {!hasBack ? (
        <Logo width="20%" height="90%" />
      ) : (
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={30} color="#31476B" />
        </TouchableOpacity>
      )}
      <View style={styles.headingContainer}>
        <HeadText>{screenName}</HeadText>
      </View>
      {settings ? (
        <TouchableOpacity
          style={styles.settingsIcon}
          onPress={() => navigation.navigate('Settings')}
        >
          <Ionicons name="settings" size={30} color="#31476B" />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    width: '100%',
    paddingTop: 18,
    paddingHorizontal: 5,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '60%',
  },
  icon: {
    width: '20%',
  },
  settingsIcon: {
    marginLeft: 30,
  },
});
