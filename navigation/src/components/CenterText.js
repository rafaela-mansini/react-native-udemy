import React from 'react'
import {View, Text} from 'react-native'

const CenterText = props => {
    return(
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: props.ColorBg || '#000',
        }}>
            <Text style={{fontSize: 50, color: props.TextColor || '#FFF'}}>{props.children}</Text>        
        </View>
    )
}

export default CenterText