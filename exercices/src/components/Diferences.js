import React from 'react'
import { Text, Platform } from 'react-native'

export default _ => {
    if(Platform.OS === 'android'){
        return <Text>Android</Text>
    }
    else if(Platform.OS === 'ios'){
        return <Text>IOS</Text>
    }
    else{
        return <Text>Plataform not identified =/</Text>
    }
}