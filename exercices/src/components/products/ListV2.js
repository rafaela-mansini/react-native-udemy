import React from 'react'
import { Text, FlatList } from 'react-native'
import products from './products'

export default props => {
    const render = ({ item: p}) => {
        return <Text>{p.id}. {p.name} - R${p.ammout}</Text>
    }

    return (
        <>
            <Text>List of products V2</Text>
            <FlatList
                data={products}
                keyExtractor={i => `${i.id}`}
                renderItem={render}
            />
        </>

    )
}