import React from 'react'
import { Button } from 'react-native'

export default props => {

    function randomNumber(min, max){
        const fator = max - min + 1
        return parseInt(Math.random() * fator) + min
    }

    return (
        <Button
            title="Execute"
            onPress={() => {
                const n = randomNumber(props.min, props.max)
                props.func(n, 'The number is: ')
            }}
        />
    )
}