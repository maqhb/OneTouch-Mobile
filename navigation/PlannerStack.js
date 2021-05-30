import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import PlannerScreen from '../screens/AppScreens/Planner/PlannerScreen';
import ScheduleScreen from '../screens/AppScreens/Planner/ScheduleScreen';

const Stack = createStackNavigator();
const PlannerStack = () => {
  return (
    <Stack.Navigator initialRouteName="Planner">
      <Stack.Screen
        name="Planner"
        component={PlannerScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PlannerStack;

const styles = StyleSheet.create({});
