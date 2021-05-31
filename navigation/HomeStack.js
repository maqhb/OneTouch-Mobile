import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/AppScreens/Home/HomeScreen';
import SettingsScreen from '../screens/AppScreens/Home/SettingsScreen';
import ProfileScreen from '../screens/AppScreens/Home/ProfileScreen';
import EditProfile from '../screens/AppScreens/Home/EditProfile';
import FeedScreen from "../screens/AppScreens/Feed/FeedScreen";
import PostScreen from "../screens/AppScreens/Feed/PostScreen";

const Stack = createStackNavigator();
const HomeStack = ({route, navigation}) => {
    // const {acc_id,acc_type} = route.params
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Profile"
        component={EditProfile}
        options={{headerShown: false}}
      />
        <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={{headerShown: true}}
            navigation={navigation}
            // initialParams={{acc_id,acc_type}}
        />
        <Stack.Screen
            name="Post"
            component={PostScreen}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
  );
};

export default HomeStack;

const styles = StyleSheet.create({});
