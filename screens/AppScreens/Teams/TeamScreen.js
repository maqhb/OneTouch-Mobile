import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import AppText from '../../../components/AppTexts/AppText';
import AuthHeadText from '../../../components/AppTexts/AuthHeadText';

import Header from '../../../components/Header';
import Screen from '../../../components/Screen';
import TeamNavigator from './TeamNavigator';

export default function TeamScreen({navigation, route}) {
  console.log(route.params.team);
  const team = route.params.team;
  const [DefaultView, setDefaultView] = useState(true);
  const [TeamSpace, setTeamSpace] = useState(false);
  const [KanBanBoard, setKanBanBoard] = useState(false);
  const [Manage, setManage] = useState(false);

  const onPressButton = (button) => {
    if (button === 'TeamSpace') {
      if (TeamSpace === true) {
        setTeamSpace(false);
        setKanBanBoard(false);
        setManage(false);
        setDefaultView(true);
      } else {
        setTeamSpace(true);
        setKanBanBoard(false);
        setManage(false);
        setDefaultView(false);
      }
    }
    if (button === 'KanBanBoard') {
      if (KanBanBoard === true) {
        setTeamSpace(false);
        setKanBanBoard(false);
        setManage(false);
        setDefaultView(true);
      } else {
        setTeamSpace(false);
        setKanBanBoard(true);
        setManage(false);
        setDefaultView(false);
      }
    }
    if (button === 'Manage') {
      if (Manage === true) {
        setTeamSpace(false);
        setKanBanBoard(false);
        setManage(false);
        setDefaultView(true);
      } else {
        setTeamSpace(false);
        setKanBanBoard(false);
        setManage(true);
        setDefaultView(false);
      }
    }
  };

  return (
    <>
      <Header screenName="Team" hasBack={true} navigation={navigation} />
      <View style={styles.headingView}>
        <AppText style={styles.headingText}>{team.name}</AppText>
      </View>
      <TeamNavigator navigation={navigation} />
      {/* <Screen feedBack={false}> */}
      {/* <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={TeamSpace ? styles.activeButton : styles.inactiveButton}
            onPress={() => onPressButton('TeamSpace')}
          >
            <Text style={TeamSpace ? styles.activeText : styles.inactiveText}>
              TeamSpace
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={KanBanBoard ? styles.activeButton : styles.inactiveButton}
            onPress={() => onPressButton('KanBanBoard')}
          >
            <Text style={KanBanBoard ? styles.activeText : styles.inactiveText}>
              Kanban Board
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={Manage ? styles.activeButton : styles.inactiveButton}
            onPress={() => onPressButton('Manage')}
          >
            <Text style={Manage ? styles.activeText : styles.inactiveText}>
              Manage
            </Text>
          </TouchableOpacity>
        </View>

        {DefaultView && (
          <View style={styles.defaultView}>
            <Text>Default View</Text>
          </View>
        )}

        {TeamSpace && (
          <View style={styles.teamSpaceView}>
            <Text>Team Space</Text>
          </View>
        )}

        {KanBanBoard && (
          <View style={styles.kanBanBoardView}>
            <Text>Kanban Board</Text>
          </View>
        )}

        {Manage && (
          <View style={styles.manageView}>
            <Text>Manage</Text>
          </View>
        )} */}
      {/* </Screen> */}
    </>
  );
}

const styles = StyleSheet.create({
  headingView: {
    justifyContent: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
  headingText: {
    fontSize: 35,
  },
  buttonsContainer: {
    height: 40,
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  inactiveText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: 'grey',
  },
  activeText: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    fontWeight: '500',
    color: '#fff',
  },
  activeButton: {
    height: 30,
    borderRadius: 20,
    backgroundColor: '#26AB',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  inactiveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
  defaultView: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    height: 500,
    borderRadius: 20,
    alignItems: 'center',
  },

  teamSpaceView: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 500,
    alignItems: 'center',
    backgroundColor: '#26ABFF',
  },

  kanBanBoardView: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 500,
    alignItems: 'center',
    backgroundColor: '#26AB',
  },
  manageView: {
    marginVertical: 20,
    marginHorizontal: 10,
    height: 500,
    alignItems: 'center',
    backgroundColor: '#26ABEE',
  },
});
