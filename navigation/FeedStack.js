import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PostScreen from '../screens/AppScreens/Feed/PostScreen';
import FeedScreen from '../screens/AppScreens/Feed/FeedScreen';

const Stack = createStackNavigator();
const FeedStack = ({route}) => {

        // ?.account_id ?? 'nope'
    return (
    <Stack.Navigator initialRouteName="Feed">

    </Stack.Navigator>
  );
};

export default FeedStack;

const styles = StyleSheet.create({});
