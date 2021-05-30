//  Native Imports
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
} from 'react-native';

// Assets Imports
import Collaboration from '../../../assets/svgs/collaboration.svg';

// Components Imports
import Header from '../../../components/Header';
import Screen from '../../../components/Screen';
import AppText from '../../../components/AppTexts/AppText.js';
import IconButton from '../../../components/Buttons/IconButton';
import AppButton from '../../../components/Buttons/AppButton';
import AppInput from '../../../components/AppInput';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UnslpashModal from '../../../components/UnslpashModal';

export default function CreateScreen({navigation}) {
  const [isVisible, setIsVisible] = useState(false);
  const [caption, setCaption] = useState('');
  const [busy, setbusy] = useState(true);
  const [imageUri, setImageUri] = useState(null);
  const onPress = () => {
    console.log('onPressed');
  };
  const onPressPublish = () => {
    const data = {
      caption: caption,
      contentImage: imageUri,
    };
    console.log('In Publish ', data);
  };
  const onPressSchedule = () => {
    console.log('onPressedSchedule');
    navigation.navigate('Planner');
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
      <Header
        screenName="Post Content"
        hasBack={false}
        navigation={navigation}
      />
      <Screen feedBack={false}>
        <Collaboration width="100%" height="38%" />
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <View style={styles.boxContainer}>
              <UnslpashModal
                isVisible={isVisible}
                onPressClose={() => setIsVisible(false)}
                // eslint-disable-next-line no-shadow
                onChangeImage={(imageUri) => setImageUri(imageUri)}
              />
              <AppText style={styles.boxText}>Post Content Form</AppText>
              <View style={styles.iconContainer}>
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
              <AppText style={styles.boxText}>Selected Platforms</AppText>
              <View style={styles.socialIconContainer}>
                <View style={styles.row}>
                  <IconButton
                    size={40}
                    style={styles.socialIcon}
                    onPress={onPress}
                    name="facebook-with-circle"
                    color="#3b5998"
                  />
                  <IconButton
                    size={40}
                    style={styles.socialIcon}
                    onPress={onPress}
                    name="instagram-with-circle"
                    color="#F77737"
                  />
                  <IconButton
                    size={40}
                    style={styles.socialIcon}
                    onPress={onPress}
                    name="twitter-with-circle"
                    color="#00acee"
                  />
                </View>
                <View style={styles.row}>
                  <IconButton
                    size={40}
                    style={styles.socialIcon}
                    onPress={onPress}
                    name="linkedin-with-circle"
                    color="#0e76a8"
                  />
                  <IconButton
                    size={40}
                    style={styles.socialIcon}
                    onPress={onPress}
                    name="youtube-with-circle"
                    color="#FF0000"
                  />
                </View>
              </View>
              <View style={styles.buttonContainer}>
                <AppButton
                  name="Publish"
                  onPress={onPressPublish}
                  style={styles.button}
                  disabled={!caption}
                />
                <AppButton
                  name="Schedule"
                  onPress={onPressSchedule}
                  style={styles.button}
                />
              </View>
            </View>
            <View style={styles.contentContainer}>
              <AppText style={styles.labelText}>Caption</AppText>
              <AppInput
                placeholder="Write your caption !"
                style={styles.inputField}
                onChangeText={(text) => setCaption(text)}
                onEndEditing
              />
              <AppText style={styles.labelText}>Content</AppText>
              <View style={styles.imageContainer}>
                <Image source={{uri: imageUri}} style={styles.image} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  boxContainer: {
    marginTop: 10,
    width: '50%',
    alignItems: 'center',
  },
  contentContainer: {
    width: '50%',
    backgroundColor: '#f8f8f8',
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  boxText: {
    fontSize: 18,
  },
  labelText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginVertical: 10,
  },
  iconContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  socialIconContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  socialIcon: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    marginVertical: 5,
  },
  button: {
    marginVertical: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  inputField: {
    backgroundColor: '#E8E8E8',
    height: '20%',
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#31476B',
  },
  imageContainer: {
    width: '100%',
    height: '32%',
    borderRadius: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: '#31476B',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});
