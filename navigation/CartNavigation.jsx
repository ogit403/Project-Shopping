import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import CartScreen from '../screens/CartScreen/CartScreen';

const CartStack = createStackNavigator();

const CartStackScreen = (props) => {
    return (
      <CartStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <CartStack.Screen name="CartScreen" component={CartScreen} 
        options={{title : 'Giỏ hàng'}}/>
    </CartStack.Navigator>
    );
}


export default CartStackScreen