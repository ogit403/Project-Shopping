import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import HeaderSearch from '../components/HeaderSearch/HeaderSearch';

const SearchStack = createStackNavigator();

const SearchStackScreen = (props) => {
    return (
      <SearchStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white
          },
          headerTintColor : COLORS.main
        }}
      >
        <SearchStack.Screen name="SearchScreen" component={SearchScreen} 
        options={{header: () => {return <HeaderSearch/>}}}/>
    </SearchStack.Navigator>
    );
}


export default SearchStackScreen