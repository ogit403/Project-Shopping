import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import FilterScreen from '../screens/FilterScreen/FilterScreen';

const FilterStack = createStackNavigator();

const FilterStackScreen = (props) => {
    return (
      <FilterStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white,
          },
          headerTintColor : COLORS.main,
          // headerLeft
          // header: () => <></>
        }}
      >
        <FilterStack.Screen name="FilterStackScreen" component={FilterScreen} 
        options={{title : 'Lọc sản phẩm'}}/>
    </FilterStack.Navigator>
    );
}


export default FilterStackScreen