// Native Imports
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Screens Import
import WallScreen from './WallScreen';
import TimelineScreen from './TimelineScreen';

const {width,height} =Dimensions.get("screen");

const Tab = createMaterialTopTabNavigator()

export default function FeedNavigator({navigation}) {
    return (
       <Tab.Navigator 
       initialRouteName="Wall"
       screenOptions={{
        accessibilityRole:"button",
       }}
       backBehavior="initialRoute"
       tabBarOptions={
        {
            activeTintColor:"#FFFFFF",
            inactiveTintColor:'#31476B',
            pressColor:"#e8e8e8",
            style:styles.style,
            indicatorStyle:styles.indicatorStyle,
            labelStyle:styles.labelStyle
        }
       }
       >
             <Tab.Screen name="Wall" component={WallScreen} navigation={navigation}/>
             <Tab.Screen name="Timeline" component={TimelineScreen} navigation={navigation}/>
       </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    style : {
        width:width/1.75,
        height:45,
        alignSelf:"center",
        marginHorizontal:20,
        marginVertical:25,
        borderRadius:30,
        justifyContent:"center",
        backgroundColor:"#f2f2f2"
        },
    indicatorStyle: {
        height: '100%',
        backgroundColor:'#31476B',
        borderRadius:30,
    },
    labelStyle:{
        fontFamily:"Poppins-Medium",
        fontSize:15,
    }
})
