import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import NotifyScreen from '../screens/NotifyScreen/NotifyScreen';

const NotifyStack = createStackNavigator();

const NotifyStackScreen = (props) => {
    return (
      <NotifyStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <NotifyStack.Screen name="NotifyScreen" component={NotifyScreen} 
        options={{title : 'Giá Coin'}}/>
    </NotifyStack.Navigator>
    );
}


export default NotifyStackScreen