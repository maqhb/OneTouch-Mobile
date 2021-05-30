// Native Imports
import React from 'react';
import {KeyboardAvoidingView, StyleSheet, View} from 'react-native';
// Component Imports
import AppForm from '../../../../components/AppForm/AppForm';
import AppFormField from '../../../../components/AppForm/AppFormField';
import SubmitButton from '../../../../components/AppForm/SubmitButton';
import AppText from '../../../../components/AppTexts/AppText';
import Header from '../../../../components/Header';
import Screen from '../../../../components/Screen';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  teamName: Yup.string().required().label('Team Name'),
  admin: Yup.string().required().label('Admin'),
  description: Yup.string().required().min(4).label('Description'),
});

export default function EditTeam({navigation}) {
  return (
    <>
      <Header screenName="Team" hasBack={true} navigation={navigation} />
      <Screen>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.headingView}>
            <AppText style={styles.headingText}>Edit</AppText>
          </View>
          <View style={styles.editView}>
            <AppForm
              initialValues={{teamName: '', admin: '', description: ''}}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={validationSchema}
            >
              <View style={{alignSelf: 'center'}}>
                <AppText style={styles.labelText}>Team Name</AppText>
                <AppFormField
                  // icon="email"
                  placeholder="Team Name"
                  style={styles.inputStyleSign}
                  label="Team Name"
                  name="teamName"
                  selectionColor="#f4f4f2"
                  underlineColor="#f4f4f2"
                  textColor="#f4f4f2"
                />
              </View>
              <View style={{alignSelf: 'center'}}>
                <AppText style={styles.labelText}>Change Admin</AppText>
                <AppFormField
                  placeholder="Search .."
                  style={styles.inputStyleSign}
                  label="Admin"
                  name="admin"
                  selectionColor="#f4f4f2"
                  underlineColor="#f4f4f2"
                  textColor="#f4f4f2"
                />
              </View>
              <View style={{alignSelf: 'center'}}>
                <AppText style={styles.labelText}>Description</AppText>
                <AppFormField
                  placeholder="Description.."
                  style={styles.inputStyleSign}
                  label="Description"
                  name="description"
                  selectionColor="#f4f4f2"
                  underlineColor="#f4f4f2"
                  textColor="#f4f4f2"
                  multiline={true}
                />
              </View>
              <View style={{alignSelf: 'center', marginVertical: 25}}>
                <SubmitButton name="Save" style={styles.button} />
              </View>
            </AppForm>
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
  editView: {
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    height: 500,
    // alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  inputStyleSign: {
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 25,
    color: '#000',
    fontFamily: 'Poppins-Regular',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#31476B',
  },
  labelText: {
    marginTop: 10,
    fontSize: 18,
  },
  button: {
    width: '60%',
  },
});
