import React from 'react'
import { StyleSheet, Text} from 'react-native'
export default function AuthText(props) {
    return (
        <Text style={styles.text} >{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        color:"#FFFFFF",
        fontFamily:"Poppins-Regular",
        fontSize:16,
    }
})
