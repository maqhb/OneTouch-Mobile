import React from 'react';
import {StyleSheet, Text} from 'react-native';
export default function HeadText({children,style}) {
  return <Text style={[styles.text,style]}>{children}</Text>;
}

const styles = StyleSheet.create({
    text:{
        color:"#31476B",
        fontFamily:"Poppins-Medium",
        fontSize:26,
        textTransform:"uppercase",
    }
})
