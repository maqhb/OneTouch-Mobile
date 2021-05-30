import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Screen from '../../../components/Screen';

export default function Content({navigation}) {
  return (
    <>
      <Screen feedBack={false} style={styles.screen}>
        <View style={styles.manageView}>
          <Text>Content</Text>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  manageView: {
    borderRadius: 20,
    // marginVertical: 20,
    marginHorizontal: 10,
    height: 500,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
});
