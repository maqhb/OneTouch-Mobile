import React, { useEffect } from 'react'
import { StyleSheet, Text, View,Modal, TouchableOpacity} from 'react-native'
import UnsplashSearch, { UnsplashPhoto } from 'react-native-unsplash';
import UnsplashKeys from "../config/unsplash.config";
import HeadText from './AppTexts/HeadText';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

export default function UnslpashModal({isVisible,onPressClose,onChangeImage}) {

    const onOnlinePhotoSelect =(photo: UnsplashPhoto) =>{
        onChangeImage(photo.urls.regular);
        console.log(photo.urls.regular)
        onPressClose()
    }

    return (
        <Modal visible={isVisible}>
           <View style={styles.headContainer}>
           <TouchableOpacity style={styles.backIcon} onPress={onPressClose}>
                <Ionicons name="arrow-back" size={35} color="#31476B"/>
            </TouchableOpacity>
               <HeadText style={styles.text}>Unsplash</HeadText>
           </View>
           <UnsplashSearch
           accessKey={UnsplashKeys.accessKey} 
           onPhotoSelect={onOnlinePhotoSelect}
           searchBarStyle={styles.search}
           />
        </Modal>
    )
}

const styles = StyleSheet.create({
    text:{
        alignSelf:"center",
        width:"75%",
        // textAlign:"center"
    },
    backIcon:{
        width:"25%",
        marginHorizontal:20,
    },
    headContainer:{
        flexDirection:"row",
        marginTop:18,
    },
    search:{
        backgroundColor:"#e8e8e8",
        borderRadius:10,
    }
})
 