import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import CenterText from './components/CenterText'
import ViewA from './views/ViewA'
import ViewB from './views/ViewB'
import ViewC from './views/ViewC'

const App = props => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <ViewA />
            <ViewB />
            <ViewC />
        </SafeAreaView>    
    )
}
export default App