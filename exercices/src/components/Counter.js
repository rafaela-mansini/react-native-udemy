import React, { useState } from 'react'
import {Text, Button} from 'react-native'
import Style from './style'

export default ({initial, steps = 1}) => {
    // desestruturação do método useState que possui a variavel e uma função que seta essa variável, por isso utiliza a desestruturação para facilitar
    const [number, setNumber] = useState(initial)

    const inc = () => setNumber(number + steps)
    const dec = () => setNumber(number - steps)
    const clear = () => setNumber(0)

    return (
        <>
            <Text style={Style.textBig}>{number}</Text>
            <Button title="Increment" onPress={inc} />
            <Button title="Decrement" onPress={dec} />
            <Button title="Clear" onPress={clear} />

        </>
    )
}