import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'
import StepStack from '../components/StepsStack'

const Tab = createBottomTabNavigator()

const Tabs = props => {
    return(
        <Tab.Navigator tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: { fontSize: 30 }
        }} initialRouteName="ViewB">
            <Tab.Screen name="ViewA" component={ViewA} />
            <Tab.Screen name="ViewB" component={ViewB} />
            <Tab.Screen name="ViewC" component={ViewC} />
        </Tab.Navigator>
    )
}

export default Tabs