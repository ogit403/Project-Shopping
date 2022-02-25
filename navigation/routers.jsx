import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DrawerMain from './DrawerMain'
// import { Provider } from 'react-native-paper';
import AuthProvider from './AuthProvider';
const Routers = () => {

    

    return (
        // <Provider>
            <AuthProvider>
                <DrawerMain/>
            </AuthProvider>
        // </Provider>
    )
}

export default Routers