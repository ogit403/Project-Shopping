import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabsHome from './indexHome';
import DrawerContent from '../screens/DrawerScreen/DrawerScreen';
import FilterScreen from '../screens/FilterScreen/FilterScreen';
import FilterStackScreen from './FilterNavigation';
import MainStackScreen from './MainNavigation';
const DrawerHome = createDrawerNavigator();

const DrawerMain = () => {
  return (
    <DrawerHome.Navigator
    screenOptions={{
      headerShown : false
    }} 
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="MyTabsHome"
    >
        <DrawerHome.Screen name="MyTabsHome" component={MainStackScreen} />
        <DrawerHome.Screen name="Filter12123" component={FilterStackScreen} />
    </DrawerHome.Navigator>
  )
}

export default DrawerMain