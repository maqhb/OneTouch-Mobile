import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PostScreen from '../screens/AppScreens/Feed/PostScreen';
import FeedScreen from '../screens/AppScreens/Feed/FeedScreen';

const Stack = createStackNavigator();
const FeedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Post"
        component={PostScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;

const styles = StyleSheet.create({});
