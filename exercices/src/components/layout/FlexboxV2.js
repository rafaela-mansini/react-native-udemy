import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'
export default props => {
    return (
        <View style={style.Flex}>
            <Square color='#f8587a'/>
            <Square color='#b261ae' />
            <Square color='#daefa9' />
            <Square color='#99795c' />
            <Square color='#36c9a7' />
        </View>
    )
}

const style = StyleSheet.create({
    Flex:{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000'
    }
})