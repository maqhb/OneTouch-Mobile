//  Native Imports
import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

// Components Import 
import Screen from '../../../components/Screen';
import WallCard from '../../../components/Cards/WallCard'

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

export default function WallScreen({navigation}) {
    const [cardData,setCardData] = useState(data);
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
            <FlatList
            data={data}
            renderItem={({item})=>(
                <WallCard 
                key={item.key}
                data={item} 
                liked = {item.liked}
                bookmarked={item.bookmarked}
                onPressHeart={()=>onPressHeart(item)}
                onPressBookmark={()=>onPressBookmark(item)}
                profileImage={item.profileImage}
                onPressCard={()=>
                    navigation.navigate("Post",{data:item})
                }
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
