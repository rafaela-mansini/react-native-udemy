import React from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import { Comp1, Comp2 } from './components/Components';
import MinMax from './components/MinMax'

export default () => (
    <View style={style.App}>
        <Comp1 />
        <Comp2 />
        <MinMax min="3" max="20" />
        <MinMax min={8} max={72} />
    </View>

)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#CCC',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
})