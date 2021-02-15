import React from 'react'
import { View, StyleSheet } from 'react-native'
import Field from './Field'

const MineField = ({board, onOpenField, onFlagField}) => {
    const rows = board.map((row, r) => {
        const columns = row.map((field, c) => {
            return <Field {...field} 
                key={c} 
                onOpen={() => onOpenField(r, c)} 
                onFlag={e => onFlagField(r, c)}
            /> 
        })
        return <View key={r} style={{flexDirection: 'row'}}>{columns}</View>
    })
    return <View style={styles.container}>{rows}</View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEE',
    }
})

export default MineField