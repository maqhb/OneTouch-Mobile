/* eslint-disable react-native/no-inline-styles */
//  Native Imports
import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
import {Avatar, Divider} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome.js';

//  Components Imports
import IconButton from '../../../components/Buttons/IconButton';
import Screen from '../../../components/Screen';
import AppText from '../../../components/AppTexts/AppText';
import CommenterCard from '../../../components/Cards/HorizontalCard';

const {width, height} = Dimensions.get('screen');

const likers = [
  {
    likerId: 'uid323',
    likerImage: 'https://i.pravatar.cc/645',
    likerName: 'Hammad Ahmed',
    comment: 'Impressive set up',
    time: '14m ago',
    liked: false,
    likes: 10,
  },
  {
    likerId: 'uid473',
    likerImage: 'https://i.pravatar.cc/425',
    likerName: 'Asad Baig',
    time: '30m ago',
    comment: 'Where is your office? ',
    liked: true,
    likes: 10,
  },
  {
    likerId: 'uid943',
    likerImage: 'https://i.pravatar.cc/385',
    likerName: 'Hammad',
    liked: true,
    time: '30m ago',
    comment: 'Awesome',
    likes: 10,
  },
  {
    likerId: 'uid873',
    likerImage: 'https://i.pravatar.cc/825',
    likerName: 'Ali',
    time: '30m ago',
    comment: 'Good Choice',
    liked: true,
    likes: 10,
  },
];

export default function TimelineScreen({}) {
  const [data, setData] = useState(likers);
  const description =
    'Obsessed with my desk at work. All cleaned & organized after 5 years';
  const tags = ['#workdesk', '#worklife', '#agency'];

  const onPressHeart = (item) => {
    const itemArray = data.map((obj) => {
      if (obj.likerId === item.likerId) {
        obj.liked = !obj.liked;
      }
      return obj;
    });
    setData(itemArray);
  };
  return (
    <Screen style={styles.container} feedBack={true}>
      <ScrollView style={styles.contentContainer}>
        <Image
          resizeMode="cover"
          resizeMethod="auto"
          style={styles.image}
          source={{
            uri:
              'https://images.unsplash.com/photo-1616024088891-b7665fb9699e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
          }}
        />
        <View style={styles.contentView}>
          <View style={styles.contentViewHead}>
            <View style={styles.iconContainer}>
              <IconButton
                name="heart"
                size={30}
                style={styles.icon}
                color={styles.icon.color}
              />
              <FontAwesome
                name="comment"
                size={30}
                color={styles.icon.color}
                style={styles.icon}
              />
              <MaterialIcons
                name="more-vert"
                size={30}
                color={styles.icon.color}
                style={styles.icon}
              />
            </View>
            <View style={styles.likedView}>
              <View style={styles.likerView1}>
                <Avatar.Image
                  size={50}
                  source={{uri: likers[0].likerImage}}
                  style={styles.avatarImage}
                />
                <View style={styles.avatarWrapper}>
                  <Avatar.Image
                    size={50}
                    source={{uri: likers[1].likerImage}}
                    style={styles.avatarImage2}
                  />
                </View>
              </View>
              <View style={styles.likerView2}>
                <AppText>Liked by</AppText>
                <View style={{flexDirection: 'row', width: '80%'}}>
                  <AppText style={styles.likerView2Text}>
                    {likers[0].likerName},{likers[1].likerName},{' '}
                  </AppText>
                  <AppText style={styles.likerView2Text2}>
                    and {likers.length} others
                  </AppText>
                </View>
              </View>
            </View>
            <Divider style={styles.divider} />
          </View>
          <View style={styles.descriptionContainer}>
            <AppText style={styles.descriptionText}>{description} </AppText>
            <View style={styles.tags}>
              {tags.map((tag, index) => (
                <AppText style={styles.tagText} key={index}>
                  {tag}
                </AppText>
              ))}
            </View>
            <AppText style={styles.timeText}>22 hours ago</AppText>
          </View>
          <Divider style={styles.divider} />
          {likers.map((liker) => (
            <CommenterCard
              key={liker.likerId}
              userName={liker.likerName}
              profileImage="https://i.pravatar.cc/585"
              description={liker.comment}
              time={liker.time}
              liked={liker.liked}
              style={styles.commentCard}
              SideComponent={true}
              imageBackground={styles.imageBackground}
              onPressLike={() => onPressHeart(liker)}
              descriptionStyle={styles.descriptionText}
            />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    padding: 0,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 3,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    zIndex: 0,
    position: 'absolute',
  },
  contentView: {
    position: 'relative',
    width: width,
    // height:height,
    marginTop: 0.5 * width,
    zIndex: 15,
    overflow: 'visible',
    // alignSelf:"center",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#ffffff',
  },
  contentViewHead: {
    flexDirection: 'column',
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
  },
  icon: {
    color: '#7A8fA6',
    marginVertical: 5,
    marginHorizontal: 10,
  },
  likedView: {
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  descriptionContainer: {
    marginHorizontal: 25,
  },
  descriptionText: {
    width: '70%',
    fontSize: 16,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tagText: {
    flexDirection: 'row',
    color: '#2676E1',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  divider: {
    marginTop: 15,
    marginBottom: 10,
    marginHorizontal: 20,
    backgroundColor: '#000000',
  },
  timeText: {
    fontSize: 15,
  },
  avatarWrapper: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: 58,
    height: 55,
    left: 30,
    position: 'absolute',
  },
  avatarImage2: {
    top: 2.5,
    left: 4,
  },
  likerView1: {
    width: '20%',
    // left:40,
  },
  likerView2: {
    width: '80%',
    left: 25,
  },
  likerView2Text: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
  },
  likerView2Text2: {
    fontSize: 12,
  },
  commentCard: {
    // fontSize:20,
    backgroundColor: '#ffffff',
  },
});
