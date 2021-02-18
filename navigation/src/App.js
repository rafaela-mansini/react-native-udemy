import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import CenterText from './components/CenterText'

const App = props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <CenterText>App</CenterText>
        </SafeAreaView>    
    )
}
export default App