//  Native Imports
import React from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

// Componets Imports

import AppText from '../../../../components/AppTexts/AppText';
import Header from '../../../../components/Header';
import Screen from '../../../../components/Screen';
import ManageRolesList from '../../../../components/List/ManageRolesList';

import * as Yup from 'yup';
import AppButton from '../../../../components/Buttons/AppButton';

const data = [
  {id: '0', Name: 'Member 1', Role: 'Admin'},
  {id: '1', Name: 'Member 2', Role: 'Accounts'},
  {id: '2', Name: 'Member 3', Role: 'Accounts'},
  {id: '3', Name: 'Member 4', Role: 'Accounts'},
];

export default function ManageRoles({navigation}) {
  return (
    <>
      <Header screenName="Team" hasBack={true} navigation={navigation} />
      <Screen>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.headingView}>
            <AppText style={styles.headingText}>Manage Roles</AppText>
          </View>
          <View style={styles.manageView}>
            <View style={styles.columnTextView}>
              <AppText style={styles.subtitleText}>Name</AppText>
              <AppText style={styles.subtitleText}>Role</AppText>
            </View>
            <View style={{marginVertical: 20}}>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <ManageRolesList
                    key={data.id}
                    Name={item.Name}
                    Role={item.Role}
                  />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View style={styles.changeButtonContainer}>
              <AppButton
                onPress={() => console.log('Change Button Pressed')}
                style={styles.changeButton}
                name="Change"
              ></AppButton>
            </View>
            <View style={styles.saveButtonContainer}>
              <AppButton
                onPress={() => console.log('Save Button Pressed')}
                style={styles.saveButton}
                name="Save"
              ></AppButton>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  screen: {
    paddingTop: 0,
  },
  manageView: {
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 10,
    height: 550,
    backgroundColor: '#F8F8F8',
    paddingLeft: 10,
    paddingVertical: 20,
  },
  columnTextView: {
    marginTop: 10,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 60,
  },

  subtitleText: {
    fontSize: 22,
  },

  changeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 20,
  },
  saveButtonContainer: {
    marginVertical: 30,
    alignItems: 'center',
  },
  changeButton: {
    width: '40%',
    height: 30,
    fontSize: 12,
  },

  saveButton: {
    width: '50%',
  },
});
