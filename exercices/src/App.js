import React from 'react';
import  { View, Text, StyleSheet } from 'react-native';
import { Comp1, Comp2 } from './components/Components';

export default () => (
    <View style={style.App}>
        <Comp1 />
        <Comp2 />
    </View>

)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#CCC',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})