import React from 'react'
import { View, StyleSheet } from 'react-native'
import Square from './Square'
export default props => {
    return (
        <View style={style.Flex}>
            <Square color='#f8587a' height={20} />
            <Square color='#b261ae' height={30} />
            <Square color='#daefa9' height={40} />
            <Square color='#99795c' height={50} />
            <Square color='#36c9a7' height={60} />
        </View>
    )
}

const style = StyleSheet.create({
    Flex:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 350,
        width: '100%',
        backgroundColor: '#000'
    }
})