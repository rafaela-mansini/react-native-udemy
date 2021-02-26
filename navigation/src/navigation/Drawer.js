import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ViewA from '../views/ViewA'
import ViewB from '../views/ViewB'
import ViewC from '../views/ViewC'
import ViewD from '../views/ViewD'

const DrawerNav = createDrawerNavigator()

const Drawer = props => {
    return(
        <DrawerNav.Navigator initialRouteName="ViewD">
            <DrawerNav.Screen name="ViewA" component={ViewA} />
            <DrawerNav.Screen name="ViewB" component={ViewB} />
            <DrawerNav.Screen name="ViewC" component={ViewC} />
            <DrawerNav.Screen name="ViewD" component={ViewD} />
        </DrawerNav.Navigator>
    )
}

export default Drawer