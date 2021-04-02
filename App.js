
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TranscactionScreen from './booktransactionscreen'
import SearchScreen from './searchscreen'


export default class library extends React.Component{
  render(){
  return (
    <AppContainer/>
  );
  }
}

const TabNavigator = createBottomTabNavigator({
Transcaction:{screen:TranscactionScreen},
Search:{screen:SearchScreen}
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
