import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationProvider } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack'
import { Servicerequest } from './Servicerequest'
import Slider from './Slider'
const Stack=createStackNavigator()
const Sliderstack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Slider" component={Slider} options={{ headerShown: false }}/>
        <Stack.Screen name="Servicerequest" component={Servicerequest} />
    </Stack.Navigator>

  )
}

export default Sliderstack

const styles = StyleSheet.create({})