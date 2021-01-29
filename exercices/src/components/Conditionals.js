import React from 'react'
import { Text, View } from 'react-native'

export default ({num = 0}) => {
    return (
        <>
            <Text>{num} é um valor</Text>
            <Text>
            {num % 2 === 0 ? 'Par' : 'Ímpar' }
            </Text>
        </>
    )
}