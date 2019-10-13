import React, { Component } from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import Padrao from '../estilo/Padrao'

export default class Contador extends Component {
    //Sempre deve retornar ao menos a funcao render(){}.
    //Pode conter outras funcoes dentro para controle
    //Dentro de um componente class, toda propriedade externa chega como estativa.
    //Tudo deve ser acessado com o this, que referencia a instancia da propria class.
    //Propriedades externas chegam atraves do Component, e serao acessadas atraves de this.props.

    state = {
        numero: this.props.valorInicial ? this.props.valorInicial : 0
    }

    incrementa = () => {this.setState({ numero: this.state.numero + 1 })}
    reseta = () => {this.setState( {numero: 0 })}
    setarValorInicial = () => {this.setState({numero: this.props.valorInicial})}

    render() {
        return (
            <View>
                <Text style={Padrao.ex}>{this.state.numero}</Text>
                <TouchableHighlight
                    style={Padrao.ex}
                    onPress={this.incrementa}
                    onLongPress={this.reseta}>
                    <Text>Incrementar / Zerar</Text>
                </TouchableHighlight>
            </View>            
        )
    }
}