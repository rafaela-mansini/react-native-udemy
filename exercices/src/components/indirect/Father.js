import React, {useState} from 'react'
import {Text} from 'react-native'
import Son from './Son'

export default props => {

    const [num, setNum] = useState('')
    const [text, setText] = useState('Click to get a random value')

    function getValue(value, text){
        setNum(value)
        setText(text)
    }

    return (
        <>
            <Text>{text}{num}</Text>
            <Son
                min={1}
                max={60}
                func={getValue}
            />
        </>
    )
}