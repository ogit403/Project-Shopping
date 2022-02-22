import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../components/Header/Header';
import HeaderCate from '../components/HeaderCate/HeaderCate';
import { COLORS } from '../contains';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ListScreen from '../screens/ListScreen/ListScreen';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import DetailScreen from '../screens/DetailScreen/DetailScreen';
import CategoryScreen from '../screens/CategoryScreen/CategoryScreen';
import UserStackScreen from './UserNavigation';
import OrderScreen from '../screens/OrderScreen/OrderScreen'
const HomeStack = createStackNavigator();

const HomeStackScreen = (props) => {
  const navigation = useNavigation();
  const changeFilter = () => {
    // console.log('filter')
    navigation.navigate('FilterMainScreen')
  }

    return (
      <HomeStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
            height: 100
          },
          headerTitleStyle: {
            // fontFamily: 'Poppins'
          },
          headerTintColor : COLORS.main,
          headerTitleAlign: 'center'
        }}
      >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} 
        options={{
          header: () => {return <Header/>}
       }}/>
         <HomeStack.Screen name="ListHomeScreen" component={ListScreen} 
        options={{
          title: 'Danh sách sản phẩm',
          headerRight: () => {return <AntDesign onPress={changeFilter} style={{marginRight: 15}} name="filter" size={30} color={COLORS.main} />}
          
       }}/>
        <HomeStack.Screen name="Category123123" component={CategoryScreen} 
        options={{
          title: 'Danh sách sản phẩm',
         
          
       }}/>
    </HomeStack.Navigator>
    );
}


export default HomeStackScreen