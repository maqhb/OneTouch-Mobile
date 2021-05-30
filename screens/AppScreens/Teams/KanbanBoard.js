import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Screen from '../../../components/Screen';
import BoardNavigator from './kanbanBoard/BoardNavigator';

export default function KanbanBoard({navigation}) {
  return (
    <>
      <Screen feedBack={false} style={styles.screen}>
        <BoardNavigator />
        {/* <View style={styles.kanbanBoardView}></View> */}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
    flex: 1,
    marginHorizontal: 0,
  },
  kanbanBoardView: {
    borderRadius: 20,
    marginHorizontal: 10,
    height: 500,
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
});
