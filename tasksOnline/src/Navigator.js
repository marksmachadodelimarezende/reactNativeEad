import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import Auth from './screens/Auth'
import Agenda from './screens/Agenda'

const mainRoute = {
    Auth: {
        name: 'Auth',
        screen: Auth,
    },
    Home: {
        name: 'Home',
        screen: Agenda,
    },
}

const mainNavigator = createSwitchNavigator(mainRoute, {
    initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)