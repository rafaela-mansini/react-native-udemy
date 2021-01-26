import React, {Fragment} from 'react'
import { Text } from 'react-native'
import Style from './style'

export default props => {
    return(
        <Fragment>
            <Text style={Style.textBig}>{props.first}</Text>
            <Text>{props.second}</Text>
        </Fragment>
    )
}