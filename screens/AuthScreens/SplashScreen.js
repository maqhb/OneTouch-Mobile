//Native Exports 
import React, {useEffect, useRef, useState} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import SplashScreenLogoAnimation from '../../assets/animations/splash.json';
import LottieView from 'lottie-react-native';
//Third Party Exports Starts

//Third Party Exports Ends
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {loginUser} from "../../redux/ducks/auth/login/loginOps";
import {actions} from "../../redux/ducks/auth/login/loginDuck";

const SplashScreen = ({navigation}) => {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = AsyncStorage.getItem("Token").then((result)=>{
      return result;
    })
    console.log(token)
    if(token){
      const user = AsyncStorage.getItem("User").then((result)=>{
        return result;
      })
      console.log(user);
      dispatch(actions.loginSuccess(user));
    }
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#FFFFFF');
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (!Loading) {
      navigation.navigate('Register');
    }
  }, [Loading, navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={SplashScreenLogoAnimation}
        style={{width: '80%'}}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#31476B',
  },
});

export default SplashScreen;
