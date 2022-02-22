import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';

const InfoStack = createStackNavigator();

const InfoStackScreen = (props) => {
    return (
      <InfoStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <InfoStack.Screen name="InfoScreen" component={InfoScreen} 
        options={{title : 'Giá Coin'}}/>
    </InfoStack.Navigator>
    );
}


export default InfoStackScreen