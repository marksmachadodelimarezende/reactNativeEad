import React, {Component} from 'react'
import {View, Text, TextInput} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Evento extends Component {
    state = {
        texto: ''
    }

    aletarTexto = texto => {
        this.setState({texto})
    }

    render() {
        return(
            <View>
                <Text style={Padrao.f40}>{this.state.texto}</Text>
                <TextInput value={this.state.texto}
                    style={Padrao.input}
                    onChangeText={this.aletarTexto}></TextInput>
            </View>
        )
    }
}