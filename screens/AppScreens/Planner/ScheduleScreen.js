import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  Alert,
  PermissionsAndroid,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';

import Header from '../../../components/Header';
import Screen from '../../../components/Screen';

import AppText from '../../../components/AppTexts/AppText.js';
import IconButton from '../../../components/Buttons/IconButton';
import AppButton from '../../../components/Buttons/AppButton';
import AppInput from '../../../components/AppInput';

import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UnslpashModal from '../../../components/UnslpashModal';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default function ScheduleScreen({navigation}) {
  //date time modal states
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [caption, setCaption] = useState('');
  const [busy, setbusy] = useState(true);
  const [imageUri, setImageUri] = useState(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formatDateTime = moment(date).format('MMMM Do YYYY - hh:mm A');
    setSelectedDateTime(formatDateTime);
    hideDatePicker();
  };

  //=================================

  const onPress = () => {
    console.log('onPressed');
  };

  const onPressSchedule = () => {
    const data = {
      caption: caption,
      contentImage: imageUri,
      DateTime: selectedDateTime,
    };
    console.log('In Schedule ', data);
  };
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        Alert.alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const takeImage = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
      // videoQuality: 'low',
      // durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          // Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          Alert.alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        //   setFilePath(response);
        setImageUri(response.uri);
        console.log(response);
        setbusy(false);
      });
    }
  };

  const selectImage = async () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 1,
      // videoQuality: 'low',
      // durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchImageLibrary(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          // Alert.alert('User cancelled camera picker');
          return;
        } else if (response.errorCode === 'camera_unavailable') {
          Alert.alert('Camera not available on device');
          return;
        } else if (response.errorCode === 'permission') {
          Alert.alert('Permission not satisfied');
          return;
        } else if (response.errorCode === 'others') {
          Alert.alert(response.errorMessage);
          return;
        }
        console.log('base64 -> ', response.base64);
        console.log('uri -> ', response.uri);
        console.log('width -> ', response.width);
        console.log('height -> ', response.height);
        console.log('fileSize -> ', response.fileSize);
        console.log('type -> ', response.type);
        console.log('fileName -> ', response.fileName);
        //   setFilePath(response);
        setImageUri(response.uri);
        console.log(response);
        setbusy(false);
      });
    }
  };

  const handlePress = (type) => {
    if (type === 'camera') {
      if (!imageUri) selectImage();
      else
        Alert.alert('Delete', 'Are you sure you wnat to delete the image?', [
          {
            text: 'Yes',
            onPress: () => setImageUri(null),
          },
          {text: 'No'},
        ]);
    } else if (type === 'gallery') {
      if (!imageUri) takeImage();
      else
        Alert.alert('Delete', 'Are you sure you wnat to delete the image?', [
          {
            text: 'Yes',
            onPress: () => setImageUri(null),
          },
          {text: 'No'},
        ]);
    }
  };

  return (
    <>
      <Header screenName="SCHEDULE" hasBack={true} navigation={navigation} />
      <Screen style={{justifyContent: 'center'}} feedBack={false}>
        <View style={styles.mainContainer}>
          <Text style={styles.postContentFromText}>Post Content From</Text>
          <UnslpashModal
            isVisible={isVisible}
            onPressClose={() => setIsVisible(false)}
            // eslint-disable-next-line no-shadow
            onChangeImage={(imageUri) => setImageUri(imageUri)}
          />

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 15,
              height: 70,
              flexDirection: 'row',
            }}
          >
            <IconButton
              name="image"
              size={30}
              style={styles.icon}
              onPress={() => handlePress('camera')}
            />
            <IconButton
              name="camera"
              size={30}
              style={styles.icon}
              onPress={() => handlePress('gallery')}
            />
            <IconButton
              name="upload"
              size={30}
              style={styles.icon}
              onPress={() => setIsVisible(true)}
            />
          </View>
          <View
            style={{height: 250, flexDirection: 'row', marginHorizontal: 15}}
          >
            <View
              style={{
                width: '50%',
                marginRight: 10,
              }}
            >
              <Text style={styles.subtitleText}>Content </Text>
              <View style={styles.imageContainer}>
                <Image source={{uri: imageUri}} style={styles.image} />
              </View>
            </View>
            <View
              style={{
                width: '50%',
              }}
            >
              <Text style={styles.subtitleText}>Caption </Text>
              <AppInput
                placeholder="Write your caption !"
                style={styles.inputField}
                onChangeText={(text) => setCaption(text)}
                onEndEditing
              />

              <Text style={styles.selectPlatformText}>Select Platforms</Text>
              <View style={styles.row}>
                <IconButton
                  size={30}
                  style={styles.socialIcon}
                  onPress={onPress}
                  name="facebook-with-circle"
                  color="#3b5998"
                />
                <IconButton
                  size={30}
                  style={styles.socialIcon}
                  onPress={onPress}
                  name="instagram-with-circle"
                  color="#F77737"
                />
                <IconButton
                  size={30}
                  style={styles.socialIcon}
                  onPress={onPress}
                  name="twitter-with-circle"
                  color="#00acee"
                />
                <IconButton
                  size={30}
                  style={styles.socialIcon}
                  onPress={onPress}
                  name="linkedin-with-circle"
                  color="#0e76a8"
                />
                <IconButton
                  size={30}
                  style={styles.socialIcon}
                  onPress={onPress}
                  name="youtube-with-circle"
                  color="#FF0000"
                />
              </View>
            </View>
          </View>
          <View style={styles.dateTimePickerContainer}>
            <MaterialIcons name="date-range" size={30} color="#31476B" />
            {selectedDateTime ? (
              <Text
                style={{color: '#26ABFF', fontSize: 20, marginHorizontal: 20}}
              >
                {selectedDateTime}
              </Text>
            ) : (
              <Text style={{color: 'grey', fontSize: 20, marginHorizontal: 20}}>
                __/__/____ - __ : __
              </Text>
            )}

            <TouchableOpacity onPress={showDatePicker}>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
              />
              <IonIcons name="chevron-down" size={30} color="#31476B" />
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <AppButton
              name="Schedule"
              onPress={onPressSchedule}
              style={styles.button}
            />
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: 650,
    backgroundColor: '#E8E8E8',
    borderRadius: 20,
    // elevation: 3,
  },
  postContentFromText: {
    color: '#000',
    marginTop: 40,
    paddingLeft: 20,
    fontFamily: 'Poppins-Regular',
    fontSize: 25,
    fontWeight: '500',
  },

  subtitleText: {
    color: '#000',
    marginTop: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 20,
    fontWeight: '600',
  },
  selectPlatformText: {
    color: '#000',
    marginTop: 10,
    paddingLeft: 10,
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#31476B',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  inputField: {
    backgroundColor: '#fff',
    height: 110,
    borderRadius: 15,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#31476B',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 5,
  },
  socialIcon: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  dateTimePickerContainer: {
    height: 50,
    backgroundColor: '#fff',
    marginTop: 40,
    marginHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 5,
    elevation: 4,
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
