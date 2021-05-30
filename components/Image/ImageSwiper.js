import React from 'react'
import {
    View,
    Image,
    StyleSheet,
  } from 'react-native';

import Swiper from 'react-native-swiper';


function ImageSwiper({images}) {
    return (
        <View style={styles.sliderContainer}>
        <Swiper
          loop
          horizontal
          height={200}
          activeDotColor="#26ABE2">
          {images.map(item => 
          <View style={styles.slide} key={item.id}>
            <Image
              source={{uri:item.image}}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          )
          }
        </Swiper>
      </View>
    )
}

export default ImageSwiper;

const styles = StyleSheet.create({
    sliderContainer: {
      height: 350,
      width: '100%',
      // marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
    },
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
    },
});