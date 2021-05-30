// Native Imports
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

// Component Imports
import Header from '../../../components/Header';
import Team from '../../../assets/svgs/team.svg';
import Screen from '../../../components/Screen';
import AppButton from '../../../components/Buttons/AppButton';

const {width, height} = Dimensions.get('screen');

export default function TeamHome({navigation}) {
  const newTeamHandler = () => {
    console.log('New Team Handler');
  };
  const teamsHandler = () => {
    console.log(' Teams Handler');
    navigation.navigate('Teams');
  };
  const manageHandler = () => {
    console.log('Manage Handler');
  };

  return (
    <>
      <Header hasBack={false} screenName="Teams" />
      <Screen style={styles.screen}>
        <Team width="100%" height="55%" />
        <View style={styles.container}>
          <AppButton
            name="New Team"
            onPress={newTeamHandler}
            style={styles.button}
          />
          <AppButton
            name="My teams"
            onPress={teamsHandler}
            style={styles.button}
          />
          <AppButton
            name="Manage"
            onPress={manageHandler}
            style={styles.button}
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  button: {
    width: width / 2.5,
    marginVertical: 15,
    alignSelf: 'center',
  },
});
