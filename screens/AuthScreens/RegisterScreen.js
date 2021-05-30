import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import colors from '../../assets/colors';
import AuthHeadText from '../../components/AppTexts/AuthHeadText';
import AuthSubtitleText from '../../components/AppTexts/AuthSubtitleText';
import FacebookButton from '../../components/Buttons/FacebookButton';
import EmailButton from '../../components/Buttons/EmailButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Logo from '../../assets/svgs/logo.svg';
import {useNavigation} from '@react-navigation/native';

export default function RegisterScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.logo} />
      <Logo width={200} height={200} />
      <AuthHeadText>Sign Up</AuthHeadText>
      <AuthSubtitleText>It's easier to sign up now!</AuthSubtitleText>
      <View style={styles.buttonsContainer}>
        <FacebookButton
          name="Continue with Facebook"
          onPress={() => {
            console.log('Facebook Button Pressed');
          }}
        />
        <EmailButton
          name="I'll use email"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{name: 'Signup'}],
            });
          }}
        />
        <View style={styles.socialIconsContainer}>
          <TouchableOpacity
            onPress={() => {
              console.log('Google plus icon pressed');
            }}
          >
            <AntDesign
              name="googleplus"
              size={30}
              color="#fff"
              style={styles.iconStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Twitter icon Pressed');
            }}
          >
            <FontAwesome
              name="twitter"
              color="#fff"
              size={30}
              style={styles.iconStyle}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              console.log('Linked in icon Pressed');
            }}
          >
            <FontAwesome
              name="linkedin"
              color="#fff"
              size={30}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.textContainer}>
          <AuthSubtitleText>Already have account?</AuthSubtitleText>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{name: 'Login'}],
              });
            }}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  logo: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsContainer: {
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    marginVertical: 25,
  },
  iconStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 25,
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
