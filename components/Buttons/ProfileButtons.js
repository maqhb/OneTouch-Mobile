import React from 'react'
import { StyleSheet} from 'react-native'
import {Button} from 'react-native-paper';
export default function ProfileButton({name,onPress}) {
    return (
        <Button onPress={onPress} style={styles.button} color={styles.button.color} labelStyle={styles.button.fontFamily}>{name}</Button>
    )
}

const styles = StyleSheet.create({
    button:{
        color:"#0E2A47",
        fontFamily:"Poppins-Medium",
        backgroundColor:"#ECECEC",
    }
})
