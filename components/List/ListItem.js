import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import AppText from '../AppTexts/AppText';

export default function ListItem({
  title,
  color,
  BacklogScreen,
  AddRemoveScreen,
  onPress,
}) {
  const [selected, setSelected] = useState(false);
  const bellIconPressed = () => {
    if (selected === false) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };

  const deleteIconPressed = () => {
    console.log('Delete Icon Pressed');
  };

  return (
    <View style={styles.itemView} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View
          style={{
            width: 5,
            height: '90%',
            backgroundColor: '#26ABFF',
            borderRadius: 10,
          }}
        />
        <FontAwesome
          style={{paddingLeft: 15}}
          name="circle-thin"
          size={20}
          color="grey"
        ></FontAwesome>
      </View>
      <View style={styles.textView}>
        <AppText style={{fontSize: 18, fontWeight: '700', color: '#554E8F'}}>
          {title}
        </AppText>
      </View>

      <TouchableOpacity
        onPress={AddRemoveScreen ? deleteIconPressed : bellIconPressed}
        style={styles.customIconContainer}
      >
        {AddRemoveScreen ? (
          <MaterialCommunityIcon name="minus-circle" size={20} color={'red'} />
        ) : (
          <MaterialCommunityIcon
            name="bell"
            size={20}
            color={!selected ? 'grey' : 'gold'}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  itemView: {
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    elevation: 2,
  },
  iconContainer: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textView: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customIconContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
