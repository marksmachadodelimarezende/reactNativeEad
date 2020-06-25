import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import Auth from './screens/Auth'
import Agenda from './screens/Agenda'

const menuRoutes = {
    Today: {
        name: 'Today',
        screen: props => <Agenda title='Hoje' daysAhead={0} {...props}/>,
        navigationOptions: {
            title: 'Hoje',
        }
    },
    Tomorrow: {
        name: 'Tomorrow',
        screen: props => <Agenda title='Amanhã' daysAhead={1} {...props}/>,
        navigationOptions: {
            title: 'Amanhã',
        }
    },
    Week: {
        name: 'Week',
        screen: props => <Agenda title='Semana' daysAhead={7} {...props}/>,
        navigationOptions: {
            title: 'Semana',
        }
    },
    Month: {
        name: 'Month',
        screen: props => <Agenda title='Mês' daysAhead={30} {...props}/>,
        navigationOptions: {
            title: 'Mês',
        }
    },
}

const menuNavigator = createDrawerNavigator(menuRoutes)

const mainRoute = {
    Auth: {
        name: 'Auth',
        screen: Auth,
    },
    Home: {
        name: 'Home',
        screen: menuNavigator,
    },
}

const mainNavigator = createSwitchNavigator(mainRoute, {
    initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)