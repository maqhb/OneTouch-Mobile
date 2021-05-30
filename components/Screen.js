import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

function Screen({children, style, feedBack}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        disabled={feedBack}
      >
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 18,
    flex: 1,
    marginHorizontal: 15,
  },
});

export default Screen;
