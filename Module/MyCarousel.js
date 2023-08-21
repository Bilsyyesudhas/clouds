import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const MyCarousel = () => {
    const data = [
      { id: 1, image: require('./Image/cEmFNc.jpg') },
      { id: 2, image: require('./Image/wnogSq.jpg') },
      { id: 3, image: require('./Image/picture1.jpg') },
    
    ];
  
    const renderItem = ({ item }) => (
      <View>
        <Image source={item.image} style={{ width: 500, height: 200 }} />
      </View>
    );
  
    return (
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={400}
        itemWidth={500}
        loop={true}
      />
    );
  };
  export default MyCarousel