import React, { useState } from 'react'
import { Text } from 'react-native'

import Display from './Display'
import Buttons from './Buttons'

export default props => {
    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return (
        <>
            <Text>Counter V2</Text>
            <Display num={num} />
            <Buttons inc={inc} dec={dec} />
        </>
    )
}