import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'
import StepStack from '../components/StepsStack'

const StackNav = createStackNavigator()

const Stack = props => {
    return(
        <StackNav.Navigator initialRouteName="ViewA"
            screenOptions={{headerShown: true}}>
            <StackNav.Screen name="ViewA" 
                options={{title: "Initial informations"}}>
                {props => (
                    <StepStack {...props} next="ViewB"><ViewA /></StepStack>
                )}
            </StackNav.Screen>
            <StackNav.Screen name="ViewB" 
                options={{title: "ViewB"}}>
                {props => (
                    <StepStack {...props} next="ViewC"><ViewB /></StepStack>
                )}
            </StackNav.Screen>
            <StackNav.Screen name="ViewC" component={ViewC} />
        </StackNav.Navigator>
    )
}

export default Stack