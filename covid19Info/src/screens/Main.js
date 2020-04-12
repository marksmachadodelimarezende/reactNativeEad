import React from 'react'
import AboutScreen from './AboutScreen'
import PreventionsScreen from './PreventionsScreen'
import InformationScreen from './InformationScreen'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

export default createMaterialBottomTabNavigator({
  About: {
    screen: AboutScreen,
    navigationOptions: {
      tabBarLabel: 'Sobre',
      tabBarIcon: ({ tintColor })=>(
      <Icon name='info' size={24} color={tintColor} />
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
  Information: {
    screen: InformationScreen,
    navigationOptions: {
      tabBarLabel: 'Informações',
      tabBarIcon: ({ tintColor })=>(
      <Icon name='server' size={24} color={tintColor} />
      )
    }
  },
},{
  initialRouteName: 'Preventions',
  order: ['Information', 'Preventions', 'About'],
  activeColor : 'blue',
  inactiveColor: 'green',
  shifting: false,
})