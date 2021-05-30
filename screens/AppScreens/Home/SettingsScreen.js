//  Native Imports
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Component Screen
import Screen from '../../../components/Screen';
import Header from '../../../components/Header';
import AppText from '../../../components/AppTexts/AppText';
import {Divider} from 'react-native-paper';

export default function SettingsScreen({navigation}) {
  const renderButton = (onPress, name) => {
    return (
      <TouchableOpacity style={styles.textButton} onPress={onPress}>
        <AppText style={styles.appText}>{name}</AppText>
        <Divider style={styles.divider} />
      </TouchableOpacity>
    );
  };
  const profileHandler = () => {
    console.log('profile Handler');
    navigation.navigate('Profile');
  };
  const planHandler = () => {
    console.log('plan Handler');
    navigation.navigate('Profile');
  };
  const accountHandler = () => {
    console.log('account Handler');
    navigation.navigate('Profile');
  };
  const deleteHandler = () => {
    console.log('delete Handler');
    navigation.navigate('Profile');
  };
  const homeHandler = () => {
    console.log('home Handler');
    navigation.goBack();
  };
  return (
    <>
      <Header screenName="Settings" hasBack={true} navigation={navigation} />
      <Screen>
        <View style={styles.settingsView}>
          {renderButton(profileHandler, 'Profile')}
          {renderButton(planHandler, 'Upgrade Plan')}
          {renderButton(accountHandler, 'Deactivate Account')}
          {renderButton(deleteHandler, 'Delete Account')}
          {renderButton(homeHandler, 'Home')}
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  textButton: {
    marginLeft: 25,
  },
  appText: {
    fontSize: 18,
    color: '#0E2A47',
  },
  divider: {
    marginVertical: 15,
    width: '92%',
    borderWidth: 0.2,
    borderColor: '#C5C5C5',
  },
  settingsView: {
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 70,
    marginHorizontal: 10,
    height: 500,
    backgroundColor: '#F8F8F8',
  },
  button: {
    marginVertical: 12,
  },
});
