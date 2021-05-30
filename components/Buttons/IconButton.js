// Native Imports
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';

export default function IconButton({name,color,onPress,size,style,}) {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.icon,style]}>
            <Entypo name={name} color={!color?"#26ABE2":color} size={!size?70:size} />
        </TouchableOpacity>
    )
}

const styles =StyleSheet.create({
    icon:{
        marginHorizontal:30,
    }
})