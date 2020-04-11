import React from 'react'
import HomeScreen from './HomeScreen'
import PreventionsScreen from './PreventionsScreen'
import SettingsScreen from './SettingsScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

export default createMaterialBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Início',
      tabBarIcon: ({ tintColor })=>(
      <Icon name='home' size={24} color={tintColor} />
      )
    }
  },
  Preventions: {
    screen: PreventionsScreen,
    navigationOptions: {
      tabBarLabel: 'Prevenção',
      tabBarIcon: ({ tintColor })=>(
      <Icon name='exclamation-circle' size={24} color={tintColor} />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Configurações',
      tabBarIcon: ({ tintColor })=>(
      <Icon name='cog' size={24} color={tintColor} />
      )
    }
  },
},{
  initialRouteName: 'Preventions',
  //order: ['Settings', 'Home'],
  activeColor : 'blue',
  inactiveColor: 'green',
  shifting: false,
})