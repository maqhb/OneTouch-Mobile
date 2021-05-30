import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import ListView from './ListView';

export default function ListViewList({data, onPress}) {
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {data["teamSocialAccountDetails"][0]["SocialAccount"].map((item) => (
            <View style={styles.listContainer} key={item.key}>
              <ListView
                key={item.key}
                title={item['first_name'] + " " + item['last_name']}
                description={
                  item["account_type"]}
                accountImageUri={item["profile_pic_url"]}
                onPress={onPress}
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
