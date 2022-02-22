import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import ListScreen from '../screens/ListScreen/ListScreen';

const ListStack = createStackNavigator();

const ListStackScreen = (props) => {
    return (
      <ListStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <ListStack.Screen name="ListScreen" component={ListScreen} 
        options={{title : 'Danh sách sản phẩm'}}/>
    </ListStack.Navigator>
    );
}


export default ListStackScreen