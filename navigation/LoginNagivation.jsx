import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

const LoginStack = createStackNavigator();

const LoginStackScreen = (props) => {
    return (
      <LoginStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <LoginStack.Screen name="LoginScreen" component={LoginScreen} 
        options={{title : 'Giá Coin', header: () => {return <></>}}}/>
    </LoginStack.Navigator>
    );
}


export default LoginStackScreen