import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';

const AddressStack = createStackNavigator();

const AddressStackScreen = (props) => {
    return (
      <AddressStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <AddressStack.Screen name="AddressScreen" component={AddressScreen} 
        options={{title : 'Địa chỉ'}}/>
    </AddressStack.Navigator>
    );
}


export default AddressStackScreen