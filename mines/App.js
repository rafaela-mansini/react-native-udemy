import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import params from './src/params'
import MineField from './src/components/MineField'
import { createMinedBoard, cloneBoard, openField, hasExplosion, wonGame, showMines, invertFlag, flagsUsed } from './src/logic'
import Header from './src/components/Header'
import LevelSelection from './src/screen/LevelSelection'

const App = () => {
  const minesAmount = () => {
    const columnsAmount = params.getColumnsAmount()
    const rowsAmount = params.getRowsAmount()
    return Math.ceil(columnsAmount * rowsAmount * params.difficultLevel)
  }

  const [cols, setCols] = useState(params.getColumnsAmount())
  const [rows, setRows] = useState(params.getRowsAmount())
  const [won, setWon] = useState(false)
  const [lost, setLost] = useState(false)
  const [showLevelSelection, setShowLevelSelection] = useState(false)
  const [board, setBoard] = useState(createMinedBoard(rows, cols, minesAmount()))

  const createState = () => {
    setCols(params.getColumnsAmount())
    setRows(params.getRowsAmount())
    setWon(false)
    setLost(false)
    setShowLevelSelection(false)
    setBoard(createMinedBoard(rows, cols, minesAmount()))
  }
  

  const onOpenField = (row, column) => {
    const newBoard = cloneBoard(board)
    openField(newBoard, row, column)
    const isLost = hasExplosion(newBoard)
    const isWon = wonGame(newBoard)

    if(isLost){
      showMines(newBoard)
      Alert.alert('Bacaiarô', 'Tu perdeu meu bro...')
    }

    if(isWon){
      Alert.alert('Ganhooouuu', 'Mininu experto')
    }
    setLost(isLost)
    setWon(isWon)
    setBoard(newBoard)
  }

  const onFlagField = (row, column) => {
    const newBoard = cloneBoard(board)
    invertFlag(newBoard, row, column)
    const isWon = wonGame(newBoard)
    
    if(isWon){
      Alert.alert('Ganhooouuu', 'Mininu experto')      
    }
    setWon(isWon)
    setBoard(newBoard)
  }

  const onLevelSelected = level => {
    params.difficultLevel = level
    createState()
  }

  return (
    <View style={styles.container}>
      <LevelSelection isVisible={showLevelSelection} onLevelSelected={onLevelSelected} onCancel={() => setShowLevelSelection(false)} />
      <Header 
        flagsLeft={minesAmount() - flagsUsed(board)}
        onNewGame={() => createState()}
        onFlagPress={() => setShowLevelSelection(true)}
      />
      <View style={styles.board}>
        <MineField board={board} onOpenField={onOpenField} onFlagField={onFlagField} />
      </View>
        
    </View>
  );
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

export default App
