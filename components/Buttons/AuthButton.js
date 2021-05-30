import React from 'react'
import { StyleSheet} from 'react-native'
import {Button} from 'react-native-paper';
export default function AuthButton({name,onPress}) {
    return (
        <Button mode="text" onPress={onPress} style={styles.button} color={styles.button.color} labelStyle={styles.button.fontFamily}>{name}</Button>
    )
}

const styles = StyleSheet.create({
    button:{
        color:"#FFFFFF",
        fontFamily:"Poppins-Medium",
        backgroundColor:"#26ABE2",
    }
})
