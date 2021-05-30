/* eslint-disable react-native/no-inline-styles */
// Native Imports
import * as React from 'react';
import {Avatar, Title} from 'react-native-paper';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import AppText from '../AppTexts/AppText';
import IconButton from '../Buttons/IconButton';

const {width} = Dimensions.get('screen');

export default function HorizontalCard({
  profileImage,
  time,
  userName,
  description,
  style,
  imageBackground,
  likes,
  liked,
  comment,
  SideComponent, //for rendering side reply and like option
  onPressLike,
  descriptionStyle,
}) {
  return (
    <View style={[styles.row, style]}>
      <View style={[styles.columnImage, imageBackground]}>
        <Avatar.Image
          source={{uri: profileImage}}
          size={60}
          style={styles.image}
        />
        {!comment ? (
          <View />
        ) : (
          <View style={styles.littleHeart}>
            <IconButton
              name="heart"
              size={20}
              style={styles.icon}
              color={!liked ? styles.icon.color : '#FF5757'}
            />
            <AppText style={styles.likes}>{likes}</AppText>
          </View>
        )}
      </View>
      <View style={styles.columnDescription}>
        <View style={styles.rowDescription}>
          <Title style={styles.titleText}>{userName}</Title>
          <AppText style={styles.timeText}>{time}</AppText>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AppText style={[styles.descriptionText, descriptionStyle]}>
            {description}
          </AppText>
          {!SideComponent ? (
            <View />
          ) : (
            <View style={styles.sideComponent}>
              <AppText>Reply</AppText>
              <IconButton
                name={'heart'}
                size={25}
                style={styles.icon}
                color={!liked ? styles.icon.color : '#FF5757'}
                onPress={onPressLike}
              />
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    backgroundColor: '#f4f4f4',
    height: 130,
  },
  columnImage: {
    width: '18%',
    height: 70,
    marginTop: 25,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
  },
  columnDescription: {
    width: '82%',
    alignSelf: 'center',
    marginHorizontal: 8,
  },
  rowDescription: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 0.05 * width - 1,
    color: '#1B1B1B',
  },
  descriptionText: {
    fontSize: 0.04 * width,
    paddingHorizontal: 2,
    color: '#7A8fA6',
    width: '90%',
    // height:"50%",
  },
  timeText: {
    fontSize: 14,
    paddingRight: 5,
  },
  littleHeart: {
    position: 'absolute',
    paddingTop: 100,
    width: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: '100%',
    marginHorizontal: 0,
    paddingLeft: 15,
    color: '#7A8fA6',
  },
  likes: {
    width: '100%',
    fontFamily: 'Poppins-Regular',
    fontSize: 0.04 * width - 2,
  },
  sideComponent: {
    width: '20%',
    flexDirection: 'row',
  },
});
