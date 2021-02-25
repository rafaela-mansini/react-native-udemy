import React from 'react'
import CenterText from '../components/CenterText'

const ViewA = props => {
    return(
    <CenterText ColorBg='#963256'>
        View C #{props.route.params.number}
    </CenterText>
    )
}

export default ViewA