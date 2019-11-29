import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import params from './params'
import MineField from './components/MineField'
import { createMinedBoard } from './function'
import { styles } from './appStyles'

export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmounts = ( )=> {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard( rows, cols, this.minesAmounts() ),
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Iniciando Mines</Text>
        <Text>Tamanho da grade: {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board}></MineField>
        </View>
      </View>
    );
  }
}


