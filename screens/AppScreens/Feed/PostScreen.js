//  Native Imports
import React, { useState } from 'react';
import { StyleSheet,View,ScrollView, } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome.js"

//  Components Imports
import Header from '../../../components/Header';
import ImageSwiper from '../../../components/Image/ImageSwiper'
import Screen from '../../../components/Screen';
import IconButton from '../../../components/Buttons/IconButton';
import AppText from "../../../components/AppTexts/AppText";
import  UserCaptionCard  from '../../../components/Cards/HorizontalCard';
import  CommenterCard  from '../../../components/Cards/HorizontalCard';

const images = [
    {
        id: 1,
        image:         "https://i.pravatar.cc/435",
    },
    {
        id: 2,
        image:         "https://i.pravatar.cc/415",
    },
    {
        id: 3,
        image:         "https://i.pravatar.cc/425",
    },
    {
        id: 4,
        image:         "https://i.pravatar.cc/455",
    },
    {
        id: 5,
        image:         "https://i.pravatar.cc/465",
    },
]


export default function PostScreen({navigation,route}) {
    const data = route.params.data;
    const [like,setLike] = useState(data.liked);
    const [bookmark,setBookmark] =useState(data.bookmarked); 
    const onPressHeart = ()=>{
        const status = (data.liked = !data.liked);
        setLike(status)
      }
      const onPressBookmark = ()=>{
        const status = (data.bookmarked = !data.bookmarked);
        setBookmark(status)
      }
   const onPressComment=()=>{
       console.log("On Press Comment")
   }
   const onPressShare=()=>{
    console.log("On Press Share")
}
    return (
        <>
        <Header screenName={"Post"} hasBack={true} navigation={navigation}/>
        <Screen style={styles.screen} feedBack={true}>
            <ScrollView>
            <View >
            <ImageSwiper images={images}/>
            </View>
            <View style={styles.iconContainer}>
                 <View style={styles.row}>
                     <View style={styles.row}>
                        <IconButton name="heart" size={30} onPress={()=>onPressHeart()}  color={!like?"#7A8fA6":"#FF5757"} style={styles.icon} />
                        <AppText style={styles.rowText}>{data.likes.length}</AppText>
                </View>
                <View style={styles.row}>
                        <FontAwesome name="comment" size={28} onPress={onPressComment} color={"#7A8fA6"}  style={styles.icon}/>
                        <AppText style={styles.rowText}>{data.comments.length}</AppText>
                </View>
                <View style={styles.row}>
                        <FontAwesome name="share" size={30} onPress={onPressShare}  color={"#7A8fA6"} style={styles.icon}/>
                        <AppText style={styles.rowText}>{data.shares.length}</AppText>
                </View>
            </View>
            <View>
                <IconButton name="bookmark" size={35} color={!bookmark?"#7A8fA6":"#26ABE2"} onPress={()=>onPressBookmark()}/>
            </View>
            </View>
                <UserCaptionCard 
                userName={data.name} 
                profileImage="https://i.pravatar.cc/565" 
                description={data.description} 
                time={data.time} 
                />
                {
                    data.comments.map(comment=>(
                            <CommenterCard 
                             key={comment.commentId}
                            userName={comment.commenterName} 
                            profileImage="https://i.pravatar.cc/585" 
                            description={comment.comment} 
                            time={comment.time} 
                            liked={comment.liked}
                            style={styles.commenter}
                            likes={comment.likes}
                            comment={comment}
                            imageBackground={styles.imageBackground}
                            />
                    ))
                }    
                </ScrollView>
        </Screen>
        </>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#ffffff",
        marginHorizontal:0,
    },
    container:{
        flex:1,
    },
    iconContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingTop:10,
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
    icon:{
        alignSelf:"center",  
        marginVertical:5,
        marginHorizontal:10,
    },
    postDetails:{
        marginVertical:10,
    },
    commenter:{
        backgroundColor:"#ffffff"
    },
    imageBackground:{
        height:70,
        backgroundColor:"#9AD3F4"
    }
})
