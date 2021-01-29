import React, { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

export default props => {
    const [name, setName] = useState('')
    
    return (
        <View>
            <Text>{name}</Text>
            <TextInput
                placeholder="Texting your name"
                value={null}
                onChangeText={name => setName(name)}
            />
        </View>
    )
}