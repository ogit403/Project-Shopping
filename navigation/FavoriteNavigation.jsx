import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; 
import { COLORS } from '../contains'
import AddressScreen from '../screens/AddressScreen/AddressScreen';
import ConfirmCartScreen from '../screens/ConfirmCartScreen/ConfirmCartScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import { useDispatch, useSelector } from 'react-redux';
import { removeAllFavorite } from '../store/slices/favoriteSlice';
import { Alert } from 'react-native';

const FavoriteStack = createStackNavigator();

const FavoriteStackScreen = (props) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.Favorite.list);

  const removeFavorite = () => {
    if(list.length === 0){
      Alert.alert(
        "Thông báo",
        "Hiện không có sản phẩm nào",
        [
          {
            text: "Cancel",
            style: "cancel"
          }
        ]
      ); 
    }
    else
    Alert.alert(
      "Thông báo",
      "Bạn có muốn xóa hết các sản phẩm ?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => dispatch(removeAllFavorite()) }
      ]
    );    
  }

    return (
      <FavoriteStack.Navigator
        screenOptions={{
          headerStyle : {
            backgroundColor : COLORS.white,
          },
          headerTintColor : COLORS.main
        }}
      >
        <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen} 
        options={{title : 'Danh sách yêu thích',
          headerRight: () => {return <Ionicons onPress={removeFavorite} style={{marginRight: 25}} name="trash-bin-outline" size={30} color={COLORS.main} /> }
        }}/>
    </FavoriteStack.Navigator>
    );
}


export default FavoriteStackScreen