import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';

const OrderStack = createStackNavigator();

const OrderStackScreen = (props) => {
    return (
      <OrderStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <OrderStack.Screen name="OrderScreen" component={OrderScreen} 
        options={{title : 'Giỏ hàng'}}/>
    </OrderStack.Navigator>
    );
}


export default OrderStackScreen