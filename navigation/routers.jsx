import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DrawerMain from './DrawerMain'
import { Provider } from 'react-native-paper';
const Routers = () => {
    return (
        <Provider>
            <DrawerMain/>
        </Provider>
    )
}

export default Routers