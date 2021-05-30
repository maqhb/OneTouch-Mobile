//  Native Imports
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Components Import
import Header from '../../../components/Header';
import Screen from '../../../components/Screen';
import TeamsList from '../../../components/List/TeamsList';

const data = [
  {
    id: 'uid-345',
    name: 'Mismatched',
    image: 'https://i.pravatar.cc/435',
    posts: [],
    board: [],
  },
];

export default function TeamsScreen({navigation}) {
  const onPressHandler = (team) => {
    navigation.navigate('Team', {team: team});
  };
  return (
    <>
      <Header screenName="Teams" hasBack={true} navigation={navigation} />
      <Screen style={styles.screen}>
        <View>
          <TeamsList data={data} onPress={(team) => onPressHandler(team)} />
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  //   container: {},
});
