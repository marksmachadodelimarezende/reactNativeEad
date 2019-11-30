import React, {Component} from 'react';
import {Text, View, Alert} from 'react-native';
import params from './params'
import { styles } from './appStyles'
import MineField from './components/MineField'
import Header from './components/Header'
import { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    invertFlag,
    flagsUsed
 } from './function'


export default class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = ()=> {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard( rows, cols, this.minesAmount() ),
      won: false,
      lost: false,
    }
  }
  
  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeu!', 'Tente novamente')
    }

    if(won) {
      Alert.alert('Ok', 'Você venceu!')
    }

    this.setState({board, lost, won})
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabens', 'Você venceu')
    }

    this.setState({board, won})
  }

  render() {
    return (
      <View style={styles.container}>
        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)} 
          onNewGame={() => this.setState(this.createState() )} />

        <View style={styles.board}>
          <MineField board={this.state.board} 
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField}
            ></MineField>
        </View>
      </View>
    );
  }
}


