// Native Imports
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

//  Components Import
import Header from '../../../components/Header';
import FeedNavigator from './FeedNavigator';

export default function FeedScreen({navigation}) {
  return (
    <>
      <Header screenName="Feed" hasBack={false} />
      <FeedNavigator navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({});
