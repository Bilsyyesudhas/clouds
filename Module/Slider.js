import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MarqueeView from 'react-native-marquee-view';

const Slider = () => {
  return (
    <MarqueeView
    style={{
    
      color: '#fff',
      width: 200,
      marginLeft: '30%',
      marginTop: '50%'
    }}>
    <View>
      <Text style={{ fontSize: 40, color:'black' }}>Coming soon...!</Text>
    </View>
  </MarqueeView>
  )
}

export default Slider

const styles = StyleSheet.create({})