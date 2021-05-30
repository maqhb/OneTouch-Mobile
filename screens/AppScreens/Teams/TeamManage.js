import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppButton from '../../../components/Buttons/AppButton';
import Screen from '../../../components/Screen';

export default function TeamManage({navigation}) {
  const editTeamHandler = () => {
    console.log('Edit Team');
    navigation.navigate('Edit Team');
  };
  const updateMemberHandler = () => {
    console.log(' Update Handler');
    navigation.navigate('Update Members');
  };
  const roleHandler = () => {
    navigation.navigate('Manage Roles');
  };

  return (
    <>
      <Screen feedBack={false} style={styles.screen}>
        <View style={styles.manageView}>
          <AppButton
            name="Edit Team"
            onPress={editTeamHandler}
            style={styles.button}
          />
          <AppButton
            name="Add/Remove Member"
            onPress={updateMemberHandler}
            style={styles.button}
          />
          <AppButton
            name="Manage Roles"
            onPress={roleHandler}
            style={styles.button}
          />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  manageView: {
    borderRadius: 20,
    justifyContent: 'center',
    // marginVertical: 20,
    marginHorizontal: 10,
    height: 500,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  button: {
    marginVertical: 12,
  },
});
