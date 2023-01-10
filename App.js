import 'react-native-gesture-handler'
import {StatusBar} from 'expo-status-bar'
import React, {useEffect, useState} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

// pages
import HomeScreen from './screens/HomeScreen'
import AddDetailsScreen from './screens/AddDetailsScreen'
import UpdateScreen from './screens/UpdateScreen'
import QRScanScreen from './screens/QRScanScreen'
import AllTransactions from './screens/AllTransactions'


const Stack = createStackNavigator()

export default function App() {
  const globalScreenOptions = {
    headerShown: false,
  }
  return (
    <NavigationContainer>
      <StatusBar style='light' />
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='AddDetails' component={AddDetailsScreen} />
        <Stack.Screen name='QRScan' component={QRScanScreen} />
        <Stack.Screen name='Update' component={UpdateScreen} />
        <Stack.Screen name='All' component={AllTransactions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
