//  Native Imports
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// Component Screen
import Screen from '../../../components/Screen';
import Header from '../../../components/Header';
import AppText from '../../../components/AppTexts/AppText';
import AppButton from '../../../components/Buttons/AppButton';
import {Avatar, Divider} from 'react-native-paper';
import IconButton from '../../../components/Buttons/IconButton';

export default function ProfileScreen({navigation}) {
  const [status, setStatus] = useState('active');
  const profileImage = 'https://i.pravatar.cc/525';
  const profileName = 'Robab Malick';
  const profileJob = 'UX Designer';
  const renderButton = (onPress, name, Icon) => {
    return (
      <TouchableOpacity style={styles.textButton} onPress={onPress}>
        <View style={{flexDirection: 'row'}}>
          {Icon}
          <AppText style={styles.appTextButton}>{name}</AppText>
        </View>
        <Divider style={styles.divider} />
      </TouchableOpacity>
    );
  };
  const profileHandler = () => {
    console.log('profile Handler');
  };
  const filesHandler = () => {
    console.log('files Handler');
  };
  const activityHandler = () => {
    console.log('activity Handler');
  };
  const moodHandler = () => {
    console.log('status Handler');
  };
  const editHandler = () => {
    console.log('edit Handler');
    navigation.navigate('Edit Profile');
  };
  const messageHandler = () => {
    console.log('message Handler');
  };
  const colorHandler = () => {
    if (status == 'active') {
      return '#3DBA91';
    } else if (status == 'away') {
      return '#FFD506';
    }
    if (status == 'busy') {
      return 'crimson';
    }
    if (status == 'not available') {
      return 'red';
    }
  };
  return (
    <>
      <Header screenName="Profile" hasBack={true} navigation={navigation} />
      <Screen>
        <View style={styles.profileView}>
          <View style={styles.imageView}>
            <Avatar.Image
              source={{uri: profileImage}}
              size={160}
              style={{marginBottom: 5}}
            />
            <View
              style={[styles.innerCircle, {backgroundColor: colorHandler()}]}
            />
            <AppText style={styles.appText}>{profileName}</AppText>
            <AppText style={styles.subtitleText}>{profileJob}</AppText>
            <View style={styles.buttonView}>
              <AppButton
                name="Edit Profile"
                style={styles.button}
                onPress={editHandler}
              />
              <AppButton
                name="Message"
                style={styles.button}
                onPress={messageHandler}
              />
            </View>
          </View>
          <View style={{marginTop: 40}}>
            {renderButton(
              profileHandler,
              'Set a Status',
              <FontAwesome name="smile-o" size={22} color="#848484" />,
            )}
            {renderButton(
              activityHandler,
              'Activity',
              <Feather name="activity" size={22} color="#848484" />,
            )}
            {renderButton(
              filesHandler,
              'My Files',
              <FontAwesome name="folder-open-o" size={22} color="#848484" />,
            )}
            {renderButton(
              moodHandler,
              'Change Mood',
              <EvilIcons name="bell" size={22} color="#848484" />,
            )}
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
  textButton: {
    marginLeft: 25,
  },
  buttonView: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
  },
  subtitleText: {
    fontSize: 16,
    // marginVertical: 2,
    color: '#8B8B8B',
  },
  appTextButton: {
    fontSize: 16,
    marginHorizontal: 10,
    color: '#0E2A47',
  },
  appText: {
    fontSize: 20,
    // marginVertical: 5,
    color: '#0E2A47',
  },
  divider: {
    marginVertical: 15,
    width: '92%',
    borderWidth: 0.2,
    borderColor: '#C5C5C5',
  },
  profileView: {
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    height: 620,
    backgroundColor: '#F8F8F8',
  },
  button: {
    fontSize: 12,
    paddingHorizontal: 2,
    color: '#0E2A47',
    backgroundColor: '#ECECEC',
    // marginVertical: 12,
  },
  imageView: {
    alignItems: 'center',
  },
  innerCircle: {
    position: 'absolute',
    left: 100,
    top: 120,
    width: 25,
    height: 25,
    borderRadius: 25,
    // backgroundColor: '#26ABE2',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
