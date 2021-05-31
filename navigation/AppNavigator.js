import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {BottomFabBar} from 'rn-wave-bottom-bar';
import HomeStack from './HomeStack';
import PlannerStack from './PlannerStack';
import CreateStack from './CreateStack';
import FeedStack from './FeedStack';
import TeamStack from './TeamStack';
import AnalyticsStack from './AnalyticsStack';
import {useDispatch} from "react-redux";
import {getTeamDetails} from "../redux/ducks/teams/getDetails/getTeamsOps";
import AsyncStorage from "@react-native-async-storage/async-storage"
const Tab = createBottomTabNavigator();



export default function AppNavigator() {
  const dispatch = useDispatch();
  useState(()=>{
    dispatch(getTeamDetails());
  },[])

  const tabBarIcon = (name, label) => ({focused, color, size}) => (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{alignItems: 'center'}}>
      <FontAwesome
        name={name}
        size={28}
        color={focused ? 'white' : '#31476B'}
      />
      {!focused && <Text style={styles.labelStyle}>{label}</Text>}
    </View>
  );

  const display = () => {
    return (
      <View>
        <Text>Somthing to do</Text>
      </View>
    );
  };
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#26ABE2', // Used for the FAB background Color
      }}
      tabBar={(props) => <BottomFabBar color="#ffffff" {...props} />}
    >
      <Tab.Screen
        options={{tabBarIcon: tabBarIcon('home', 'Home')}}
        name="Home"
        component={HomeStack}
      />
      <Tab.Screen
        name="Planner"
        options={{tabBarIcon: tabBarIcon('calendar', 'Planner')}}
        component={PlannerStack}
      />
      <Tab.Screen
        name="Create"
        options={{tabBarIcon: tabBarIcon('pencil', 'Create')}}
        component={CreateStack}
      />
      {/*<Tab.Screen*/}
      {/*  name="Feed"*/}
      {/*  options={{tabBarIcon: tabBarIcon('list-alt', 'Feed')}}*/}
      {/*  component={FeedStack}*/}
      {/*/>*/}
      <Tab.Screen
        name="Analytics"
        options={{tabBarIcon: tabBarIcon('bar-chart', 'Analytics')}}
        component={AnalyticsStack}

      />
      <Tab.Screen
        name="Teams"
        options={{tabBarIcon: tabBarIcon('users', 'Profile')}}
        component={TeamStack}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 12,
    fontFamily: 'Poppins-Medium',
  },
});
