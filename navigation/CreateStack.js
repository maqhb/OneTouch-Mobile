import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import CreateScreen from '../screens/AppScreens/Create/CreateScreen';


const Stack = createStackNavigator();
const CreateStack = () => {
  return (
    <Stack.Navigator initialRouteName="Create">
      <Stack.Screen
        name="Create"
        component={CreateScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CreateStack;

const styles = StyleSheet.create({});
