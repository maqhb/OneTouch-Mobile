// Native Imports
import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

// Components Imports
import IconButton from '../Buttons/IconButton';

const LeftContent = props => <Ionicons name="people" size={28} color={"#26ABE2"}{...props}/>


const SocialCard = ({title,subtitle,onPress}) => (
  <Card style={styles.cardContainer}>
    <Card.Title 
    title={title} 
    subtitle={subtitle} 
    left={LeftContent} 
    titleStyle={styles.title}
    subtitleStyle={styles.subtitle}
    />
    <Card.Content style={styles.contentContainer}>
      <View style={styles.row}>
      <IconButton onPress={()=>onPress("facebook")} name="facebook-with-circle" color="#3b5998"/>
      <IconButton  onPress={()=>onPress("instagram")} name="instagram-with-circle" color="#F77737"/>
      <IconButton  onPress={()=>onPress("twitter")} name="twitter-with-circle" color="#00acee"/>
      </View>
      <View style={styles.row}>
      <IconButton  onPress={()=>onPress("linkedin")} name="linkedin-with-circle" color="#0e76a8"/>
      <IconButton  onPress={()=>onPress("youtube")} name="youtube-with-circle" color="#FF0000"/>
      </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  cardContainer:{
    borderRadius:20,
    shadowColor:"#26ABE2",
    shadowOffset: {
       width: 0,
       height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
       elevation: 10,
  },
  title:{
    textTransform:"uppercase",
    color:"#31476B",
  },
  contentContainer:{
    alignItems:"center",
  },
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:10,
  }
})
export default SocialCard;