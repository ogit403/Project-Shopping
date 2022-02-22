import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import RouterUser from '../screens/RouterUser/RouterUser';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import OrderStackScreen from './OrderNavigation';
import NotifyScreen from '../screens/NotifyScreen/NotifyScreen';

const UserStack = createStackNavigator();

const UserStackScreen = (props) => {
    return (
      <UserStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <UserStack.Screen name="InfoScreen" component={RouterUser} />
        <UserStack.Screen name="OrderScreen" component={OrderScreen} options={{}}/>
        <UserStack.Screen name="UserScreen" component={InfoScreen} options={{}}/>
        <UserStack.Screen name="NotifyScreen" component={NotifyScreen} options={{}}/>
    </UserStack.Navigator>
    );
}


export default UserStackScreen