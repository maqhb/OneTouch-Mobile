// Native Imports
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Backlog from './Backlog';
import InProgress from './InProgress';
import PeerReview from './PeerReview';
import Completed from './Completed';

// Screens Import

const {width, height} = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();

export default function BoardNavigator({navigation}) {
  return (
    <Tab.Navigator
      initialRouteName="Back Log"
      screenOptions={{
        accessibilityRole: 'button',
      }}
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: '#ffffff',
        inactiveTintColor: '#31476B',
        pressColor: '#e8e8e8',
        style: styles.style,
        indicatorStyle: styles.indicatorStyle,
        labelStyle: styles.labelStyle,
      }}
    >
      <Tab.Screen name="Back Log" component={Backlog} navigation={navigation} />
      <Tab.Screen
        name="In Progress"
        component={InProgress}
        navigation={navigation}
      />
      <Tab.Screen
        name="Peer Review"
        component={PeerReview}
        navigation={navigation}
      />
      <Tab.Screen
        name="Completed"
        component={Completed}
        navigation={navigation}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  style: {
    width: width,
    height: 55,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#7A8FA6',
  },
  indicatorStyle: {
    height: '10%',
    backgroundColor: '#31476B',
  },
  labelStyle: {
    width: '100%',
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
});
