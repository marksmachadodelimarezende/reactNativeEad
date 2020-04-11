import {Platform} from 'react-native'

export default {
    fontFamily: 'Arial',
    colors: {
        default: '#1631be',
        today: '#b13b44',
        secondary: '#FFF',
        mainText: '#222',
        subText: '#555',
        transparent: 'transparent',
        white: 'white',
        red: 'red',
        borderLine: '#e3e3e3',
    },
    backgrouds: {
        transparenteEscurecido: 'rgba(0,0,0,0.7)',
    },
    padding: {
        global: 10,
        horizontal: 10,
        vertical: 20,
        rigth: 10,
        left: 10,
    },
    margim: {
        titleTop: 20,
        titleTop: 5,
        topApp: Platform.OS === 'ios' ? 20 : 5,
    },
}