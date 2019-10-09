import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'

const ParOuImpar = props => {
    return props % 2 == 0 ? 'Par' : 'Impar'
}

export default props =>
    <View>
        <Text style={Padrao.ex}>{props.numero} {ParOuImpar(props.numero)}</Text>
    </View>