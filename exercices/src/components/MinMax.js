import React from 'react'
import { Text } from 'react-native'
import Style from './style'

export default (props) => {
    return (
        <Text style={Style.textBig}>
            O valor de {props.min} é menor que o valor de {props.max}
        </Text>
    )
}