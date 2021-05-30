import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import TeamScreen from '../screens/AppScreens/Teams/TeamScreen';
import TeamsScreen from '../screens/AppScreens/Teams/TeamsScreen';
import TeamHome from '../screens/AppScreens/Teams/TeamHome';
import UpdateMembers from '../screens/AppScreens/Teams/ManageTeam/UpdateMembers';
import EditTeam from '../screens/AppScreens/Teams/ManageTeam/EditTeam';
import ManageRoles from '../screens/AppScreens/Teams/ManageTeam/ManageRoles';

const Stack = createStackNavigator();
const TeamStack = () => {
  return (
    <Stack.Navigator initialRouteName="TeamHome">
      <Stack.Screen
        name="TeamHome"
        component={TeamHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Teams"
        component={TeamsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Team"
        component={TeamScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Update Members"
        component={UpdateMembers}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Team"
        component={EditTeam}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Manage Roles"
        component={ManageRoles}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default TeamStack;

const styles = StyleSheet.create({});
