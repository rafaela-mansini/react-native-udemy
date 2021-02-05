import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

const App = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)

  function addDigit(n) {
    const isClearDisplay = displayValue === '0' || clearDisplay
  
    if(n === '.' && !isClearDisplay && displayValue.includes('.')) return
  
    const currentValue = isClearDisplay ? '' : displayValue
    const newDisplayValue = currentValue + n
    setDisplayValue(newDisplayValue)
    setClearDisplay(false)
  
    if(n !== '.') {
      const newValue = parseFloat(newDisplayValue)
      const newValues = [...values]
      newValues[current] = newValue
      setValues(newValues)
    }
  
  }
  
  function clearMemory(){
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }
  
  function saveOperation(op) {
    if(current === 0){
      setOperation(op)
      setCurrent(1)
      setClearDisplay(true)
    }
    else {
      const equals = op === '='
      const newValues = [...values]
      console.debug(newValues, 'in new values')
      try {
        newValues[0] = eval(`${newValues[0]} ${operation} ${newValues[1]}`)
      }
      catch(error) {
        newValues[0] = values[0]
      }
  
      newValues[1] = 0
      setDisplayValue(`${newValues[0]}`)
      setOperation(equals ? null : op)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(newValues)
    }
  }

  return (
    <View style={styles.container}>
        <Display value={displayValue} />
        <View style={styles.buttons}>
          {/* Por não ter parametros o clearMemory pode ser chamado diretamente */}
          <Button label="AC" triple onClick={clearMemory} /> 
          {/* Por passar parametros, então precisa ser chamado uma arrow function, pois o padrão enviado é o evento do botão */}
          <Button label="/" operation onClick={() => saveOperation('/')} />
          <Button label="7" onClick={() => addDigit(7)} />
          <Button label="8" onClick={() => addDigit(8)} />
          <Button label="9" onClick={() => addDigit(9)} />
          <Button label="*" operation onClick={() => saveOperation('*')} />
          <Button label="4" onClick={() => addDigit(4)} />
          <Button label="5" onClick={() => addDigit(5)} />
          <Button label="6" onClick={() => addDigit(6)} />
          <Button label="-" operation onClick={() => saveOperation('-')} />
          <Button label="1" onClick={() => addDigit(1)} />
          <Button label="2" onClick={() => addDigit(2)} />
          <Button label="3" onClick={() => addDigit(3)} />
          <Button label="+" operation onClick={() => saveOperation('+')} />
          <Button label="0" double onClick={() => addDigit(0)} />
          <Button label="." onClick={() => addDigit('.')} />
          <Button label="=" operation onClick={() => saveOperation('=')} />
        </View>
      </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
