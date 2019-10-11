import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import SimplesArrow from './componentes/SimplesArrow'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi'

export default createDrawerNavigator({
    MegaSena: {
        screen: () => <MegaSena numeros={9} />,
        navigationOptions: {
            title: 'Mega Sena'
        }
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo - Inverter'/>
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {
            title: 'Par ou Impar'
        }
    },
    Simples: {
        screen: () => <Simples texto='Texto pelo componente simples'/>
    },
    SimplesArrow: {
        screen: () => <SimplesArrow texto='Texto componente Arrow Simples'/>
    }
}, { drawerWidth: 300})