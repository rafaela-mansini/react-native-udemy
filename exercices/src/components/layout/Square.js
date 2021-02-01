import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={{
            width: props.width || 50,
            height:props.height || 50,
            backgroundColor: props.color || '#000'
        }} />
    )
}

const style = StyleSheet.create({

})