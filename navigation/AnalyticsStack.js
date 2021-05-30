import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import AnalyticsScreen from '../screens/AppScreens/Analytics/AnalyticsScreen';

const Stack = createStackNavigator();
const AnalyticsStack = () => {
  return (
    <Stack.Navigator initialRouteName="Analytics">
      <Stack.Screen
        name="Analytics"
        component={AnalyticsScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AnalyticsStack;
