import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Screen from '../../components/Screen';
import colors from '../../assets/colors';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as Yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import AuthHeadText from '../../components/AppTexts/AuthHeadText';
import AuthSubtitleText from '../../components/AppTexts/AuthSubtitleText';
import AppFormField from '../../components/AppForm/AppFormField';
import AppForm from '../../components/AppForm/AppForm';
import ErrorMessage from '../../components/AppForm/ErrorMessage';
import SubmitButton from '../../components/AppForm/SubmitButton';
import ImageInput from '../../components/Image/ImageInput';
import LocalStore, {getCurrEmail} from "../../layers/config/localStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/ducks/auth/login/loginOps";

const localStore = new LocalStore();

const validationSchema = Yup.object().shape({
  otp: Yup.number().required().label('Otp'),
});


export default function OTP() {

  const [currEmail,setEmail]=useState("");


  const navigation = useNavigation();
const dispatch = useDispatch();

  const onSubmitOTP = (values)=> {
    console.log("Current Email: ",currEmail)
    const userData = {
      email: currEmail,
      emailtoken: values.otp
    };

    dispatch(loginUser(userData)); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };


  useEffect(()=>{
    AsyncStorage.getItem("currEmail")
        .then((value)=>{
          setEmail(value);
        })
  },[currEmail])


  return (
    <View style={styles.container}>

      <View style={styles.welcomeText}>
        <AuthHeadText>Please check your email for OTP</AuthHeadText>
      </View>
      <View style={styles.inputContainer}>
        <AppForm
          initialValues={{otp: ''}}
          onSubmit={onSubmitOTP}
          validationSchema={validationSchema}
        >
          <View style={{alignSelf: 'center'}}>
            <AppFormField
              icon="email"
              placeholder="OTP"
              style={styles.inputStyleSign}
              label="Otp"
              name="otp"
              selectionColor="#f4f4f2"
              underlineColor="#f4f4f2"
              textColor="#f4f4f2"
            />
          </View>
          <View style={{alignSelf: 'center', marginVertical: 25}}>
            <SubmitButton name="Submit OTP" />
          </View>
        </AppForm>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    // paddingTop:100,
  },
  imageContainer: {
    marginTop: 50,
    // paddingBottom:100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  welcomeText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 220,
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
  inputContainer: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyleSign: {
    backgroundColor: '#fff',
    opacity: 0.9,
    borderRadius: 25,
    color: '#000',
    fontFamily: 'Poppins-Regular',
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  loginText: {
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 10,
    color: '#26ABFF',
    textDecorationLine: 'underline',
  },
});
