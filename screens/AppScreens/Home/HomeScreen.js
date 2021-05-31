// Native Imports
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

//  Components Imports
import Screen from '../../../components/Screen';
import Header from '../../../components/Header';
import SocialCard from '../../../components/Cards/SocialCard';
import ListViewList from '../../../components/List/ListViewList';
import {shallowEqual, useSelector} from "react-redux";
import {navigate} from "@react-navigation/routers/src/CommonActions";

const fakeAccounts = [
  {
    key: '018232',
    title: 'Facebook Account ',
    description: 'Facebook description',
    imageUri: 'https://i.pravatar.cc/300',
  },
];






export default function HomeScreen({navigation}) {
  const [accounts, setAccounts] = useState([]);


  const {auth,team,loading,error, account} = useSelector(state=> ({
    auth: state.auth,
    team: state.currTeam.CurrentTeam,
    loading: state.currTeam.processingTeams,
    error: state.currTeam.CurrentTeamFailed,
    account: state.attached_accounts,
  }),shallowEqual);

  useEffect(()=>{
    if(team){
      console.log(team)
    setAccounts(team)
    }
  },[team])


  const handleAccountAdd = (accountType) => {
    if (accountType === 'facebook') {
      console.log('facebook');
    } else if (accountType == 'instagram') {
      console.log('instagram');
    } else if (accountType == 'twitter') {
      console.log('twitter');
    } else if (accountType == 'linkedin') {
      console.log('linkedin');
    } else if (accountType == 'youtube') {
      console.log('youtube');
    }
  };

  const onPressAction=(acc_id,acc_type)=>{
    navigation.navigate('Feed', { acc_id,acc_type })
  }

  return (
    <>
      <Header
        screenName="Home"
        hasBack={false}
        navigation={navigation}
        settings={true}
      />
      <Screen>
        <View style={styles.cardView}>
          {accounts.length === 0 ? (
            <SocialCard
              title="Connect Accounts"
              subtitle="Social Accounts"
              onPress={handleAccountAdd}
            />
          ) : (
            <View style={styles.listView}>
              <ListViewList
                data={accounts}
                onPress={(acc_id,acc_type) => onPressAction(acc_id,acc_type)}
              />
            </View>
          )}
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  cardView: {
    justifyContent: 'center',
    height: '90%',
  },
  listView: {
    flex: 1,
    margin: 0,
  },
});
