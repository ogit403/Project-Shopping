import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';

const RegisterStack = createStackNavigator();

const RegisterStackScreen = (props) => {
    return (
      <RegisterStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <RegisterStack.Screen name="RegisterScreen" component={RegisterScreen} 
        options={{title : 'Giá Coin'}}/>
    </RegisterStack.Navigator>
    );
}


export default RegisterStackScreen