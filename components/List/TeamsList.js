import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ListView from './ListView';

export default function TeamsList({data, onPress}) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {data.map((item) => (
            <View style={styles.listContainer} key={item.id}>
              <ListView
                key={item.id}
                title={item.name}
                description={item.description}
                accountImageUri={item.image}
                onPress={() => onPress(item)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  listContainer: {},
});
