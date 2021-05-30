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
import AppForm from '../../../../components/AppForm/AppForm';
import AppFormField from '../../../../components/AppForm/AppFormField';
import SubmitButton from '../../../../components/AppForm/SubmitButton';
import AppText from '../../../../components/AppTexts/AppText';
import Header from '../../../../components/Header';
import Screen from '../../../../components/Screen';
import ListItem from '../../../../components/List/ListItem';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  addMember: Yup.string().required().label('Member Name'),
});

const data = [
  {id: '0', text: 'Team Meeting'},
  {id: '1', text: 'Send Project File'},
  {id: '2', text: 'Meeting With Client'},
  {id: '3', text: 'Email Client'},
];

export default function UpdateMembers({navigation}) {
  return (
    <>
      <Header screenName="Team" hasBack={true} navigation={navigation} />
      <Screen>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.headingView}>
            <AppText style={styles.headingText}>Add/Remove</AppText>
          </View>
          <View style={styles.editView}>
            <AppForm
              initialValues={{teamName: ''}}
              onSubmit={(values) => {
                console.log(values);
              }}
              validationSchema={validationSchema}
            >
              <AppText style={styles.labelText}>Add member</AppText>
              <View style={{alignSelf: 'center'}}>
                <AppFormField
                  placeholder="Add Member"
                  style={styles.inputStyleSign}
                  label="Add Member"
                  name="addmember"
                  selectionColor="#f4f4f2"
                  underlineColor="#f4f4f2"
                  textColor="#f4f4f2"
                />
              </View>
              <View style={styles.headingView}>
                <AppText style={styles.labelText}>Remove member</AppText>
              </View>
              <View style={{marginVertical: 20}}>
                <FlatList
                  data={data}
                  renderItem={({item}) => (
                    <ListItem
                      AddRemoveScreen
                      color={item.color}
                      key={data.id}
                      title={item.text}
                    />
                  )}
                  showsVerticalScrollIndicator={false}
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
    marginVertical: 10,
    marginHorizontal: 10,
    height: 550,
    backgroundColor: '#F8F8F8',
    paddingLeft: 10,
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
