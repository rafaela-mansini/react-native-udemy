import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'
export default props => {
    return (
        <View style={style.Flex}>
            <View style={style.V0} />
            <View style={style.V1} />
            <View style={style.V2} />
        </View>
    )
}

const style = StyleSheet.create({
    Flex:{
        flexGrow: 1,
        width: 100,
        backgroundColor: '#000'
    },
    V0: {
        backgroundColor: '#b261ae',
        height: 300
    },
    V1: {
        backgroundColor: '#f8587a',
        flexGrow: 6,
    },
    V2: {
        backgroundColor: '#36c9a7',
        flexGrow: 2,
    }
})