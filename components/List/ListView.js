import * as React from 'react';
import {StyleSheet, TouchableOpacity} from "react-native";
import { List,Avatar } from 'react-native-paper';


const ListView = ({title,description,accountImageUri,onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <List.Item
          style={styles.listContainer}
          title={title}
          titleStyle={styles.titleStyle}
          description={description}
          descriptionStyle={styles.descriptionStyle}
          descriptionNumberOfLines={2}
          left={props => <Avatar.Image {...props} source={{uri:accountImageUri}} />}
        />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listContainer:{
        backgroundColor:"#ffffff",
        // margin:0,
        width:"100%",
    },
    titleStyle:{
        fontSize:18,
    }
})


export default ListView;