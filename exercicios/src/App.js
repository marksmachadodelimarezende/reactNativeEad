import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from './componentes/Simples'
import SimplesArrow from './componentes/SimplesArrow'
import ParImpar from './componentes/ParImpar'

export default class App extends Component {
    render(){
      return (
        <View style={styles.container}>
          <Text style={styles.f20}>App!</Text>
          <Simples texto='Meu texto para componente por parametro!!'></Simples>
          <SimplesArrow texto='Componente texto Simples por arrow function!'></SimplesArrow>
          <ParImpar numero="4"></ParImpar>
          <ParImpar numero="5"></ParImpar>

        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  f20: {
    fontSize: 20
  }
})