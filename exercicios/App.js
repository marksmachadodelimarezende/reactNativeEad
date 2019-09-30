import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
    //funcao responsavel por renderizar a tela. Ela retorna os objetos - return()
    render(){
      return (
        <View style={styles.container}>
          <Text>App tttt!</Text>
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