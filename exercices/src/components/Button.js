import React from 'react'
import { Button } from 'react-native'

export default props => {

    function execute() {
        console.warn('Execute # --With references by a function')
    }
    return (
        <>
            <Button
                title="Executar 01"
                onPress={execute}
            />
            <Button
                title="Executar 02"
                onPress={function(){
                    console.warn('Execute #02 --Like a function')
                }}
            />
            <Button
                title="Executar 03"
                onPress={() => console.warn('Execute # --Like a arrow function')}
            />
        </>
    )
}