import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import ConfirmScreen from '../screens/ConfirmScreen/ConfirmScreen';

const ConfirmCartStack = createStackNavigator();

const ConfirmCartStackScreen = (props) => {
    return (
      <ConfirmCartStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <ConfirmCartStack.Screen name="ConfirmCartScreen" component={ConfirmScreen} 
        options={{header: () => {return <></>}}}/>
    </ConfirmCartStack.Navigator>
    );
}


export default ConfirmCartStackScreen