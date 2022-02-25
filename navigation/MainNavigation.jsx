import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import MyTabsHome from './indexHome';
import FilterStackScreen from './FilterNavigation';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import DetailStackScreen from './DetailNavigation';
import CategoryStackScreen from './CategoryNavigation';
import LoginStackScreen from './LoginNagivation';
import OrderStackScreen from './OrderNavigation';
import CartStackScreen from './CartNavigation';
import ConfirmCartStackScreen from './ConfirmCartNavigation';
import SearchStackScreen from './SearchNavigation';

const MainStack = createStackNavigator();

const MainStackScreen = (props) => {
    return (
      <MainStack.Navigator
      screenOptions={{
        headerStyle : {
          backgroundColor : COLORS.white,
          // height: 100
        },
        headerTintColor : COLORS.main,
        headerTitleAlign: 'center'
      }}
      >
        <MainStack.Screen name="HomeMainScreen" component={MyTabsHome} options={{
          header: () => {return <></>}
        }}/>
        <MainStack.Screen name="FilterMainScreen" component={FilterStackScreen} options={{
          header: () => {return <></>}
        }}/>
        <MainStack.Screen name="DetailHomeScreen" component={DetailScreen} options={({route}) => ({title: route.params.title})} />
        <MainStack.Screen name="CategoryHomeScreen" component={CategoryStackScreen} />
        <MainStack.Screen name="LoginHomeScreen" component={LoginStackScreen} 
          options={{
            header: () => {return <></>}
          }}
        />
        <MainStack.Screen name="CartHomeScreen" component={CartStackScreen} options={{header: () => {return <></>}}} />
        <MainStack.Screen name="SearchHomeScreen" component={SearchStackScreen} options={{header: () => {return <></>}}} />
        <MainStack.Screen name="ConfirmHomeScreen" component={ConfirmCartStackScreen} options={{title: 'Tiến hành đặt hàng'}} />
    </MainStack.Navigator>
    );
}


export default MainStackScreen