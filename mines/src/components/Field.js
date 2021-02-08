import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import params from '../params'

const Field = ({ mined, opened, nearMines }) => {
    // const { mined, opened, nearMines } = props // posso declarar desta forma ou utilizar dentro do parametro da função como está agora
    const styleField = [styles.field]

    if(opened) styleField.push(styles.opened) // se a mina estiver aberta
    if(styleField.length === 1) styleField.push(styles.regular) // se não tiver nenhum outro estilo ele coloca o regular, que é a mina fechada

    let color = null // esta cor vai ser renderizada a partir da quantidade de minas ao redor
    if(nearMines > 0){
        if(nearMines == 1) color = '#2A28D7'
        if(nearMines === 2) color = '#2B520F'
        if(nearMines > 2 && nearMines < 6) color = '#F9060A'
        if(nearMines >= 6) color = '#F221A9'
    }

    return (
        <View style={styleField}>
            {!mined && opened && nearMines > 0 ?
                <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
                : false
            }
        </View>
    )
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333',
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
    }
})

export default Field