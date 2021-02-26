import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

const Tabs = props => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                switch (route.name) {
                    case 'ViewA':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'ViewB':
                        iconName = focused
                            ? 'ios-information-circle'
                            : 'ios-information-circle-outline'
                        break
                    case 'ViewC':
                        iconName = focused ? 'ios-list-box' : 'ios-list'
                        break
                }

                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true,
            // labelStyle: { fontSize: 30 }
        }} initialRouteName="ViewB">
            <Tab.Screen name="ViewA" component={ViewA} options={{title: 'Inicial'}} />
            <Tab.Screen name="ViewB" component={ViewB} />
            <Tab.Screen name="ViewC" component={ViewC} />
        </Tab.Navigator>
    )
}

export default Tabs