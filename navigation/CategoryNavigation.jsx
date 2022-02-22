import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import HeaderCate from '../components/HeaderCate/HeaderCate';
import FilterScreen from '../screens/FilterScreen/FilterScreen';
import FilterStackScreen from './FilterNavigation';

const CategoryStack = createStackNavigator();

const CategoryStackScreen = (props) => {
    return (
      <CategoryStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <CategoryStack.Screen name="CategoryScreen" component={CategoryScreen} 
        options={{
          header:() => {return <HeaderCate/>},
         }}/>
    </CategoryStack.Navigator>
    );
}


export default CategoryStackScreen