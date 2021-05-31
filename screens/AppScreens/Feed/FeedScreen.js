// Native Imports
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//  Components Import
// import Header from '../../../components/Header';
import FeedNavigator from './FeedNavigator';
import Alert from "react-native/Libraries/Alert/Alert";

export default function FeedScreen({navigation,route}) {
    return (
    <>

      {/*<Header screenName="Feed" hasBack={true} />*/}
      <FeedNavigator navigation={navigation} route={route} />
    </>
  );
}

const styles = StyleSheet.create({});
