import React from 'react'
import { Button, View } from 'react-native'
import CenterText from '../components/CenterText'

const ViewA = props => (
    <View style={{flex:1, marginTop: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button
                title="Open"
                onPress={() => {
                    setTimeout(() => {
                        props.navigation.openDrawer()
                    }, 3000)
                }}
            />
        </View>
        <View style={{flex:1}}>
            <CenterText ColorBg='#33fa86'>
                View D
            </CenterText>
        </View>
    </View>
)

export default ViewA