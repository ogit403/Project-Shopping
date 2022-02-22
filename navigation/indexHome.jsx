import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../contains'
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import InfoScreen from '../screens/InfoScreen/InfoScreen';
import HomeStackScreen from './HomeNavigation';
import FavoriteStackScreen from './FavoriteNavigation';
import CategoryStackScreen from './CategoryNavigation';
import UserStackScreen from './UserNavigation';
import RouterUser from '../screens/RouterUser/RouterUser';

const TabHome = createBottomTabNavigator();

const MyTabsHome = () => {

    return (
        <TabHome.Navigator
            initialRouteName={'Home'}
            screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                switch (route.name) {
                case 'Home':
                    iconName = focused ? 'ios-home' : 'ios-home-outline'
                    break;
                case 'Category':
                    iconName = focused ? 'ios-copy' : 'ios-copy-outline';
                    break;
                case 'Favorite':
                    iconName = focused ? 'ios-heart' : 'ios-heart-outline'
                    break;
                case 'User':
                    iconName = focused ? 'ios-person' : 'ios-person-outline'
                    break;
                default:
                    break;
                }
                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: COLORS.white,
            tabBarInactiveTintColor: COLORS.white,
            tabBarStyle : {
                backgroundColor : COLORS.main,
                height : 65,
                paddingBottom : 10
            },
            tabBarLabelStyle : {
                fontSize : 13,
                color : COLORS.white
            },
            headerShown : false,
            // initialRouteName: "SearchScreen"
            })}
        >
            <TabHome.Screen name="Home"     component={HomeStackScreen} options={{title : 'Trang chủ',
           
        }} />
            <TabHome.Screen name="Category" component={CategoryStackScreen} options={{title : 'Danh mục'}} />
            <TabHome.Screen name="Favorite" component={FavoriteStackScreen} options={{title : 'Yêu thích'}} />
            <TabHome.Screen name="User"     component={UserStackScreen} options={{title : 'Thông tin'}} />
      </TabHome.Navigator>
    )
}

export default MyTabsHome;