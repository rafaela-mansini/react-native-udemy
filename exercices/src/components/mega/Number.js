import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Style from '../style'

export default ({quantityNumbers}) => {
    
    return (
        <View style={style.Container}>
            <Text style={[Style.textBig, style.Num]}>{quantityNumbers}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        backgroundColor: '#000',
        height: 50,
        width: 50,
        margin:5,
        borderRadius: 25
    },
    Num: {
        color: '#fff',
        textAlign: 'center'
    }
})