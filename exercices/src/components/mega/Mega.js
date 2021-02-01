import React, { Component } from 'react'
import { Text, TextInput } from 'react-native'
import Style from '../style'

export default class Mega extends Component {

    state = {
        numbers: this.props.numbers || 0
    }

    setNumbers = (text) => {
        this.setState({numbers: text})
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
                <Text style={Style.textBig}>Gerador de Mega-sena {this.state.numbers}</Text>
                <TextInput
                    keyboardType={'numeric'}
                    style={{borderBottomWidth:1}}
                    placeholder="Numbers quantity"
                    value={this.state.numbers}
                    // onChangeText={this.setNumbers} -- pode fazer desse jeito, porém tem que instanciar construtor por conta do `this`
                    // onChangeText={text => this.setNumbers(text)} -- quando não é arrow function
                    onChangeText={this.setNumbers} // basta transformar a função em arrow function que vai funcionar
                />
            </>
        )
    }
}