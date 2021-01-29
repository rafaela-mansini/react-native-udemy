import React from 'react'
import { Text } from 'react-native'
import If from './If'

export default props => {
    const user = props.user || {}

    return (
        <>
            <If test={user && user.name && user.email}>
                <Text>Usuário logado</Text>
                <Text>{user.name} {user.email}</Text>
            </If>
        </>
    )
}