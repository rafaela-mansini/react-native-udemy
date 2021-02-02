import React, { Component } from 'react'
import { Text, TextInput, Button } from 'react-native'
import Style from '../style'

export default class Mega extends Component {

    state = {
        quantityNumbers: this.props.quantityNumbers || 0,
        numbers: []
    }

    setQuantity = (text) => {
        this.setState({quantityNumbers: +text})
    }

    setNumbers = (text) => {
        this.setState({numbers: text})
    }

    generateNumbersNotContents = arrNums => {
        const newNum = parseInt(Math.random() * 60) + 1
        return arrNums.includes(newNum) ? this.generateNumbersNotContents(arrNums) : newNum
    }

    // !! programação funcional, ver sobre !!
    // generateNumbers = () => {     
    //     const numbers = Array(this.state.quantityNumbers).fill()
    //         .reduce(n => [...n, this.generateNumbersNotContents(n)],[])
    //         .sort((a, b) => a - b)
    //     this.setState({ numbers })
    // }

    // !! programação procedural !!
    generateNumbers = () => {
        const { quantityNumbers } = this.state
        const numbers = []
        for(let i = 0; i < quantityNumbers; i++){
            const n = this.generateNumbersNotContents(numbers)
            numbers.push(n)
        }
        numbers.sort((a, b) => a - b)
        this.setState({ numbers })
    }

    // também pode ser utilizado desta forma, porém é mais burocrático
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         numbers: props.numbers || 0
    //     }
    // }

    render() {
        return(
            <>
                <Text style={Style.textBig}>Gerador de Mega-sena {this.state.quantityNumbers}</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:1}}
                    placeholder="Numbers quantity"
                    value={`${this.state.quantityNumbers}`}
                    // onChangeText={this.setQuantity} -- pode fazer desse jeito, porém tem que instanciar construtor por conta do `this`
                    // onChangeText={text => this.setQuantity(text)} -- quando não é arrow function
                    onChangeText={this.setQuantity} // basta transformar a função em arrow function que vai funcionar
                />
                <Button
                    title="Generate"
                    onPress={this.generateNumbers}
                />
                <Text>{this.state.numbers.join(',')}</Text>
            </>
        )
    }
}