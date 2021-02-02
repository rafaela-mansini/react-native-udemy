import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay:  false,
  operation: null,
  values: [0, 0],
  current: 0,
}

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  addDigit = n => {
    this.setState({ displayValue: n})
  }

  clearMemory = () => {
    this.setState({ displayValue: '0' })
  }

  setOperation = operation => {

  }

  render(){
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          {/* Por não ter parametros o clearMemory pode ser chamado diretamente */}
          <Button label="AC" triple onClick={this.clearMemory} /> 
          {/* Por passar parametros, então precisa ser chamado uma arrow function, pois o padrão enviado é o evento do botão */}
          <Button label="/" operation onClick={() => this.setOperation('/')} />
          <Button label="7" onClick={() => this.addDigit(7)} />
          <Button label="8" onClick={() => this.addDigit(8)} />
          <Button label="9" onClick={() => this.addDigit(9)} />
          <Button label="*" operation onClick={() => this.setOperation('*')} />
          <Button label="4" onClick={() => this.addDigit(4)} />
          <Button label="5" onClick={() => this.addDigit(5)} />
          <Button label="6" onClick={() => this.addDigit(6)} />
          <Button label="-" operation onClick={() => this.setOperation('-')} />
          <Button label="1" onClick={() => this.addDigit(1)} />
          <Button label="2" onClick={() => this.addDigit(2)} />
          <Button label="3" onClick={() => this.addDigit(3)} />
          <Button label="+" operation onClick={() => this.setOperation('+')} />
          <Button label="0" double onClick={() => this.addDigit(0)} />
          <Button label="." onClick={() => this.addDigit('.')} />
          <Button label="=" operation onClick={() => this.setOperation('=')} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
