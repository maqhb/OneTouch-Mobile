// Native Imports
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// Screens Import
import TeamSpace from './TeamSpace';
import KanbanBoard from './KanbanBoard';
import TeamManage from './TeamManage';

const {width, height} = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

export default function TeamNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Team Space"
      screenOptions={{
        accessibilityRole: 'button',
      }}
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#31476B',
        pressColor: '#e8e8e8',
        style: styles.style,
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
      }}
    >
      <Tab.Screen
        name="Team Space"
        component={TeamSpace}
        navigation={navigation}
      />
      <Tab.Screen
        name="Kanban Board"
        component={KanbanBoard}
        navigation={navigation}
      />
      <Tab.Screen
        name="Manage"
        component={TeamManage}
        navigation={navigation}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  style: {
    width: width / 1.18,
    height: 55,
    alignSelf: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 30,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  indicatorStyle: {
    height: '100%',
    backgroundColor: '#31476B',
    borderRadius: 30,
  },
  labelStyle: {
    width: '100%',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
