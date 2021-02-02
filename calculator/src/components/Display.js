import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default props => {
    return(
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})