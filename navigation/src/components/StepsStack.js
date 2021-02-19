import React from 'react'
import {View, Button} from 'react-native'

const StepStack = props => {
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
                {props.back 
                    ?   <Button
                            title='Back'
                            onPress={() => {
                                props.navigation.goBack()
                            }}
                        />
                    : false
                }
                {props.next 
                    ?   <Button
                            title='Next'
                            onPress={() => {
                                props.navigation.navigate(props.next)
                            }}
                        />
                    : false
                }
            </View>
            <View style={{flex:1}}>
                {props.children}
            </View>
        </View>
    )
}

export default StepStack