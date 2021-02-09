import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import params from '../params'
import Mine from './Mine'
import Flag from './Flag'

const Field = ({ mined, opened, nearMines, exploded, flagged }) => {
    // const { mined, opened, nearMines } = props // posso declarar desta forma ou utilizar dentro do parametro da função como está agora
    const styleField = [styles.field]

    if(opened) styleField.push(styles.opened) // se a mina estiver aberta
    if(exploded) styleField.push(styles.exploded) // se a mina estiver explodida
    if(flagged) styleField.push(styles.flagged)
    if(!opened && !exploded) styleField.push(styles.regular) // se não tiver nenhum outro estilo ele coloca o regular, que é a mina fechada

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
            {/* Se ela estiver aberta e também minada ela deve aparecer a mina */}
            {mined && opened ? <Mine /> : false}
            {flagged && !opened ? <Flag /> : false}
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
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    }
})

export default Field