import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TeamSpaceCard from '../../../components/Cards/VerticalCard';
import Screen from '../../../components/Screen';

export default function TeamSpace({navigation}) {
  return (
    <>
      <Screen feedBack={false} style={styles.screen}>
        <View style={styles.teamSpaceView}>
          <View style={styles.cards}>
            <TeamSpaceCard
              title={'Chat'}
              name="chatbubble-ellipses-outline"
              color="#D10263"
              iconStyle={{backgroundColor: '#FF9BCD'}}
            />
            <TeamSpaceCard
              title={'Voice Call'}
              name="call-outline"
              color="#EC6C0B"
              iconStyle={{backgroundColor: '#FFD09B'}}
            />
            <TeamSpaceCard
              title={'Video Call'}
              name="videocam-outline"
              color="#09ACCE"
              iconStyle={{backgroundColor: '#9BFFF8'}}
            />
            <TeamSpaceCard
              title={'File Share'}
              name="folder-outline"
              color="#BF0080"
              iconStyle={{backgroundColor: '#F59BFF'}}
            />
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 0,
  },
  teamSpaceView: {
    marginHorizontal: 10,
    borderRadius: 20,
    height: 500,
    justifyContent: 'center',
  },
  cards: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});
