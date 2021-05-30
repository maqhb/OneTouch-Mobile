import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListItem from '../../../../components/List/ListItem';

export default function Backlog() {
  const data = [
    {id: '0', text: 'Team Meeting'},
    {id: '1', text: 'Send Project File'},
    {id: '2', text: 'Meeting With Client'},
    {id: '3', text: 'Email Client'},
  ];
  return (
    <View style={styles.container}>
      <FlatList
        BacklogScreen
        data={data}
        renderItem={({item}) => (
          <ListItem color={item.color} key={data.id} title={item.text} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    marginTop: 20,
    // height: 400,
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 20,
    elevation: 3,
  },
});
