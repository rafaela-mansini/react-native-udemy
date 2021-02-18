import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'

const StackNav = createStackNavigator()

const Stack = props => {
    return(
        <StackNav.Navigator initialRouteName="ViewA"
            screenOptions={{headerShown: false}}>
            <StackNav.Screen name="ViewA" 
                options={{title: "Initial informations"}}
                component={ViewA} />
            <StackNav.Screen name="ViewB" component={ViewB} />
            <StackNav.Screen name="ViewC" component={ViewC} />
        </StackNav.Navigator>
    )
}

export default Stack