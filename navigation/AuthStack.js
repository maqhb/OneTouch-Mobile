import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/AuthScreens/SplashScreen';
import LoginScreen from '../screens/AuthScreens/LoginScreen';
import OTP from '../screens/AuthScreens/OTP';
import RegisterScreen from '../screens/AuthScreens/RegisterScreen';

const Stack = createStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
        <Stack.Screen
            name="Otp"
            component={OTP}
            options={{headerShown: false}}
        />

    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
