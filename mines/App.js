import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard, cloneBoard, openField, hasExplosion, wonGame, showMines, invertFlag, flagsUsed } from './src/logic'
import Field from './src/components/Field'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }
  
  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hasExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Bacaiarô', 'Tu perdeu meu bro...')
    }

    if(won){
      Alert.alert('Ganhooouuu', 'Mininu experto')
    }

    this.setState({ board, lost, won })
  }

  onFlagField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)
    
    if(won){
      Alert.alert('Ganhooouuu', 'Mininu experto')      
    }

    this.setState({ board, won })
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  render(){

    return (
      <View style={styles.container}>
        <Text>Iniciando o mines</Text>
        <Text>Tamanho da grade:
          {params.getRowsAmount()} x {params.getColumnsAmount()}
        </Text>

        <View style={styles.board}>
          {/* <Field nearMines={2} opened /> */}
          <MineField board={this.state.board} onOpenField={this.onOpenField} onFlagField={this.onFlagField} />
        </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  }
});
