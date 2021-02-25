import React from 'react'
import CenterText from '../components/CenterText'

const ViewA = props => {
    const route = props.route
    const number = route && route.params && route.params.number
        ? props.route.params.number
        : 0

    return(
    <CenterText ColorBg='#963256'>
        View C #{number}
    </CenterText>
    )
}

export default ViewA