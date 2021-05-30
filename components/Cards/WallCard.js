// Native Imports
import * as React from 'react';
import {StyleSheet,View} from "react-native";
import { Avatar, Card} from 'react-native-paper';
import IconButton from "../Buttons/IconButton";
import MaterialIcons from "react-native-vector-icons/MaterialIcons.js"
import FontAwesome from "react-native-vector-icons/FontAwesome.js"

//  Components Import
import AppText from "../AppTexts/AppText";


const WallCard = ({
    onPressHeart,
    onPressBookmark,
    onPressComment,
    onPressShare,
    onPressMore,
    onPressCard,
    data,
    liked,
    bookmarked,
    profileImage
}) => {

    const leftContent = ()=><Avatar.Image size={50} source={{uri:profileImage}} />
    const rightContent = ()=><MaterialIcons name="more-vert" size={32} color={"#31476B"} style={styles.icon} onPress={onPressMore}/>
    const {name,profession,shares,likes,comments} = data;

return(
<Card onPress={onPressCard} style={styles.cardStyle} >
    <Card.Content>
    <Card.Title 
        title={name}
        subtitle={profession}
        left={leftContent}
        right={ rightContent}
        titleStyle = {styles.titleStyle}
        subtitleStyle = {styles.subtitleStyle}
    />
    </Card.Content>
    <Card.Cover source={{uri:data.coverImage}} style={styles.coverStyle}/>
    <IconButton name="bookmark" size={35} color={!bookmarked?"#7A8fA6":"#ffffff"} onPress={onPressBookmark} style={styles.bookmarkIcon}/>
    <Card.Content style={styles.iconContainer}>
        <View style={styles.row}>
        <View style={styles.row}>
        <IconButton name="heart" size={30} onPress={onPressHeart}  color={!liked?"#7A8fA6":"#FF5757"} style={styles.icon} />
        <AppText style={styles.rowText}>{likes.length}</AppText>
        </View>
        <View style={styles.row}>
        <FontAwesome name="comment" size={28} onPress={onPressComment} color={"#7A8fA6"}  style={styles.icon}/>
        <AppText style={styles.rowText}>{comments.length}</AppText>
        </View>
        <View style={styles.row}>
        <FontAwesome name="share" size={30} onPress={onPressShare}  color={"#7A8fA6"} style={styles.icon}/>
        <AppText style={styles.rowText}>{shares.length}</AppText>
        </View>
        </View>
    </Card.Content>
  </Card>  
)
}

const styles = StyleSheet.create({
    cardStyle:{
        borderRadius : 20,
        marginHorizontal: 20,
        marginVertical : 10,
        backgroundColor: "#ffffff",
        shadowColor:"#31476B",
        shadowOffset: {
            width:5,
            height:0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 6.27, 
        elevation: 4,
    },
    titleStyle: {
        fontSize : 18,
        marginHorizontal:6,
        fontFamily:"Poppins-Medium",
    },
   subtitleStyle: {
        fontSize : 16,
        marginHorizontal:6,
        fontFamily:"Poppins-Regular" ,
    },
    cardHeader:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    icon:{
        alignSelf:"center",  
        marginVertical:5,
        marginHorizontal:10,
    },
    iconContainer:{
        flexDirection:"row",

        alignSelf:"flex-start",
    },
    row:{
        flexDirection:"row",
        justifyContent:"center",
        marginHorizontal:5,
    },
    rowText:{
        alignSelf:"center",
        fontFamily:"Poppins-Medium",
        color:"#7A8fA6",
    },
    coverStyle:{
        borderRadius:10,
        marginHorizontal:20,
    },
    bookmarkIcon:{
        position:"absolute",
        marginLeft:315,
        marginTop:100,
    }
})

export default WallCard;
