import React from 'react'
import { Text } from 'react-native'

export const Comp1 = () => {
    return <Text>Componente 1</Text>
}

export const Comp2 = function () {
    return <Text>Componente 1</Text>
}

// can make this way too, but needs see a function or a const with a name
// export {Comp1, Comp2}