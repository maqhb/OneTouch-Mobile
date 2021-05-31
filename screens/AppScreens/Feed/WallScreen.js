//  Native Imports
import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// Components Import 
import Screen from '../../../components/Screen';
import WallCard from '../../../components/Cards/WallCard'
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useFocusEffect} from '@react-navigation/native';


const data =[ {
    key:"uid111",
    name:"Abdullah",
    profession:"UX Designer",
    coverImage:"https://i.pravatar.cc/545",
    profileImage:"https://i.pravatar.cc/565",
    description:"Cras gravida bibendum dolor eu varius Ipsum fermentum velit nisl, eget vehicula.",
    comments:[
        {
            commentId: "uid343",
            commenterImage:"https://i.pravatar.cc/785",
            commenterName:"Hammad",
            comment: "Wow, Just Amazing, I love your profile content, Look Forward to see more. Well done !",
            time:"2h ago",
            liked:true,
            likes:10,
        },
        {
            commentId: "uid373",
            commenterImage:"https://i.pravatar.cc/725",
            commenterName:"Ali",
            comment: "Wow, Just Amazing, I love your profile content, Look Forward to see more. Well done !",
            time:"1h ago",
            liked:true,
            likes:10,
        }
    ],
    likes:["1","2","3"],
    shares:["1","2","3"],
    liked:false,
    bookmarked:false,
    time:"8h ago"
},
{
    key:"uid123",
    name:"Asad",
    profession:"FrontEnd Engineer",
    coverImage:"https://i.pravatar.cc/525",
    profileImage:"https://i.pravatar.cc/50",
    description:"Cras gravida bibendum dolor eu varius Ipsum fermentum velit nisl, eget vehicula.",
    comments:[
        {
            commentId: "uid423",
            commenterImage:"https://i.pravatar.cc/785",
            commenterName:"Nadeema",
            comment: "Wow, Just Amazing, I love your profile content, Look Forward to see more. Well done !",
            time:"2h ago",
            liked:true,
            likes:10,
        },
        {
            commentId: "uid473",
            commenterName:"Qadir",
            commenterImage:"https://i.pravatar.cc/725",
            comment: "Wow, Just Amazing, I love your profile content, Look Forward to see more. Well done !",
            time:"1h ago",
            liked:true,
            likes:10,
        }
    ],
    likes:["1","2","3"],
    shares:["1","2","3"],
    liked:false,
    bookmarked:false,
    time:"3h ago"
},
{
    key:"uid145",
    name:"Irsa",
    profession:"Graphic Designer",
    coverImage:"https://i.pravatar.cc/585",
    profileImage:"https://i.pravatar.cc/575",
    description:"Cras gravida bibendum dolor eu varius Ipsum fermentum velit nisl, eget vehicula.",
    comments:[
        {
            commentId: "uid393",
            commenterName:"Zaibi",
            commenterImage:"https://i.pravatar.cc/785",
            comment: "Wow, Just Amazing, I love your profile content, Look Forward to see more. Well done !",
            time:"2h ago",
            liked:true,
            likes:10,
        },
        {
            commentId: "uid673",
            commenterName:"Zaibi",
            commenterImage:"https://i.pravatar.cc/725",
            comment: "Wow, Just Amazing, I love your profile content, Look Forward to see more. Well done !",
            time:"1h ago",
            liked:false,
            likes:10,
        }
    ],
    likes:["1","2","3"],
    shares:["1","2","3"],
    liked:false,
    bookmarked:false,
    time:"6h ago"
}
]

export default function WallScreen({navigation,route}) {


    useFocusEffect(
        React.useCallback(() => {
            //   alert('Screen was focused');
            // Do something when the screen is focused
            getFacebookFeeds();

            return () => {
                // alert('Screen was unfocused');
                // Do something when the screen is unfocused
                // Useful for cleanup functions
                // setUserProfile(null);
            };
        }, []),
    );

    const {acc_id,acc_type}=route?.params??'no';
    console.log(route)
    const [cardData,setCardData] = useState(data);
    // const {account_id}=route.params;
    // if(account_id){
    // console.log(account_id)
    // }else{
    //     console.log(route)
    // }
    const [feeds,setFeeds]=useState(null);
    const [youtube,setYoutube]=useState(null);
    const [tweets,setTweets]=useState(null);

    const getFacebookFeeds =async ()=>{
        const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        const team =await AsyncStorage.getItem("CurrTeam").then((value)=>{return value});
        console.log(team)
        //getFacebookFeeds
        await axios.get(`https://onetouch-feeds.herokuapp.com/feeds/getFacebookFeeds?accountId=${acc_id}&teamId=1&pageId=1`,{
            headers: {'x-access-token': token}
        })
            .then((res)=>{
                if(res.data.code===200){
                    console.log(feeds)
                    setFeeds(res.data);
                    // setInvitations(res.data.teamDetails)
                }
                else if(res.data.code===401){
                    console.log("ERROR")


                }
            })
    }

    useEffect(()=>{
            // if(!feeds){
            //     getFacebookFeeds();
            // }

    },[acc_id,acc_type])
        const randomId = 2;
    const getytFeeds =async ()=>{
        //getRecentFbFeeds
        const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        axios.get(`https://onetouch-feeds.herokuapp.com/feeds/getYoutubeFeeds?accountId=${acc_id}&teamId=1&pageId=1`,{
            headers: {'x-access-token': token}
        })
            .then((res)=>{
                if(res.data.code===200){
                    console.log(res)
                    setYoutube(res.data);

                    console.log(youtube)
                    // setInvitations(res.data.teamDetails)
                }
                else{
                    console.log("ERROR")

                }
            })
    }




    const getInstaBusinessFeeds =async ()=>{
        const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        axios.get(`https://onetouch-feeds.herokuapp.com/feeds/getRecentInstagramBusinessFeeds?accountId=${acc_id}&teamId=1&pageId=1`,{
            headers: {'x-access-token': token}
        })
            .then((res)=>{
                if(res.data.code===200){

                    setFeeds(res.data);
                    console.log(feeds)
                    // setInvitations(res.data.teamDetails)
                }
                else if(res.data.code===401){

                    console.log("ERROR")

                }

            })
    }
    const getTweets =async ()=>{
        //getRecentTweets
        const token =await AsyncStorage.getItem("Token").then((value)=>{return value});
        axios.get(`https://onetouch-feeds.herokuapp.com/feeds/getTweets?accountId=${acc_id}&teamId=1&pageId=1`,{
            headers: {'x-access-token': token}
        })
            .then((res)=>{
                if(res.data.code===200){
                    console.log(feeds)
                    // setInvitations(res.data.teamDetails)
                }
                
            })
    }


    const onPressHeart = (item)=>{
      const itemArray = cardData.map(obj=>{
          if(obj.key === item.key){
              obj.liked =   !obj.liked; 
          }
          return obj;
      })
      setCardData(itemArray);
    }
    const onPressBookmark= (item)=>{
        const itemArray = cardData.map(obj=>{
            if(obj.key === item.key){
                obj.bookmarked =   !obj.bookmarked; 
            }
            return obj;
        })
        setCardData(itemArray);
      }
    return (
        <Screen style={styles.screen}>
            {/*{feeds && <Text>*/}
            {/*    {JSON.stringify(feeds)}*/}
            {/*</Text>}*/}
            <FlatList
            data={feeds?.posts}
            renderItem={({item})=>(

                <WallCard 
                key={item.key}
                data={item}
                liked = {true}
                // bookmarked={item.bookmarked}
                onPressHeart={()=>onPressHeart(item)}
                onPressBookmark={()=>onPressBookmark(item)}
                profileImage={item.mediaUrls[0]}
                // onPressCard={()=>
                //     navigation.navigate("Post",{data:item})
                // }
                />

            )}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:"#ffffff",
        marginHorizontal:0,
    },
    container:{
        backgroundColor:"#ffffff",
        margin:0,
    }
})
