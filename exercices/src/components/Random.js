import React from 'react'
import { Text } from 'react-native'

export default (props) => { // pode ser feito a desestruturação dentro do (props) substituindo por: ({min, max})
    // desestruturação const {} = {} --primeiro par de chaves está lendo atributos de um determinado objeto, e o segundo é o objeto a ser lido
    const {min, max} = props
    const delta = max - min + 1
    var random = parseInt(Math.random() * delta) + min
    return(
        <Text>O número randomico é: {random}</Text>
    )
}