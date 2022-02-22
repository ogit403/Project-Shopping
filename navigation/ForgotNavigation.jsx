import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import ForgotScreen from '../screens/ForgotScreen/ForgotScreen';

const ForgotStack = createStackNavigator();

const ForgotStackScreen = (props) => {
    return (
      <ForgotStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <ForgotStack.Screen name="ForgotScreen" component={ForgotScreen} 
        options={{title : 'Giá Coin'}}/>
    </ForgotStack.Navigator>
    );
}


export default ForgotStackScreen