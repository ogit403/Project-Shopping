import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import DetailScreen from '../screens/DetailScreen/DetailScreen';

const DetailStack = createStackNavigator();

const DetailStackScreen = (props) => {
    return (
      <DetailStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <DetailStack.Screen name="DetailScreen" component={DetailScreen} 
        />
    </DetailStack.Navigator>
    );
}


export default DetailStackScreen