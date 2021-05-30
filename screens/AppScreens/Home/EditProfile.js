import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppForm from '../../../components/AppForm/AppForm';
import AppFormField from '../../../components/AppForm/AppFormField';
import SubmitButton from '../../../components/AppForm/SubmitButton';
import Header from '../../../components/Header';
import Screen from '../../../components/Screen';
import * as Yup from 'yup';
import ImageInput from '../../../components/Image/ImageInput';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function EditProfile({navigation}) {
  const [imageUri, setImageUri] = useState('https://i.pravatar.cc/525');
  return (
    <>
      <Header
        screenName="Edit Profile"
        hasBack={true}
        navigation={navigation}
      />
      <Screen style={{flex: 1}}>
        {/* <View style={styles.imageContainer}>
          <ImageInput
            style={styles.profileImage}
            imageUri={imageUri}
            onChangeImage={(imageUri) => setImageUri(imageUri)}
          />
          <View style={styles.outerCircle}>
            <View style={styles.innerCircle}>
              <MaterialCommunityIcon name="upload" size={25} color="#fff" />
            </View>
          </View>
        </View> */}
        <View style={styles.inputContainer}>
          <AppForm
            initialValues={{email: '', password: ''}}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={validationSchema}
          >
            <View
              style={{
                alignSelf: 'flex-end',
                marginVertical: 5,
                marginHorizontal: 25,
              }}
            >
              <SubmitButton name="Update" />
            </View>
            <View style={styles.imageContainer}>
              <ImageInput
                style={styles.profileImage}
                imageUri={imageUri}
                onChangeImage={(imageUri) => setImageUri(imageUri)}
              />
              <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                  <MaterialCommunityIcon name="upload" size={25} color="#fff" />
                </View>
              </View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <AppFormField
                icon="email"
                placeholder="Email"
                style={styles.inputStyleSign}
                label="Email"
                name="email"
                selectionColor="#f4f4f2"
                underlineColor="#f4f4f2"
                textColor="#f4f4f2"
              />
            </View>
            <View style={{alignSelf: 'center'}}>
              <AppFormField
                icon="key-variant"
                placeholder="Password"
                style={styles.inputStyleSign}
                label="Password"
                name="password"
                selectionColor="#f4f4f2"
                underlineColor="#f4f4f2"
                textColor="#f4f4f2"
                textContentType="password"
                secureTextEntry={true}
              />
            </View>
          </AppForm>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  inputStyleSign: {
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 25,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  inputContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 50,
    // paddingBottom:100,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#fff',
    // marginTop: 30,
  },
  outerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#26AB',
    marginTop: -50,
    marginLeft: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#26ABE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
