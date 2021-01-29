import React from 'react'
import { Text } from 'react-native'
import products from './products'

export default props => {
    return (
        <>
            <Text>List of products</Text>
            {products.map(p => {
                return (
                    <Text key={p.id}>
                        {p.id}. {p.name} - R${p.ammout}
                    </Text>
                )
            })}
        </>

    )
}