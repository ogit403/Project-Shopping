import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './OrderScreenStyle'
import { Searchbar } from 'react-native-paper';
import { FormatPriceGold } from '../../help';

import StepIndicator from 'react-native-step-indicator';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrderUser } from '../../store/slices/userSlice';
import DetailOrderScreen from '../DetailOrderScren/DetailOrderScreen';
import { searchDetail } from '../../store/slices/orderSlice';
import { useIsFocused, useNavigation } from '@react-navigation/native';
 
const labels = ["Cart","Delivery Address","Order Summary"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#fe7013',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#fe7013',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fe7013',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: '#fe7013'
}
 

const OrderScreen = () => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');
  const listOrder = useSelector(state => state.User.listOrder);
  const detail = useSelector(state => state.Order.detail);
  console.log(detail)
  const isLogin = useSelector(state => state.User.isLogin)
  const navigation = useNavigation();
  const isFocused = useIsFocused();
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
    setCount(count => count + 1);
    if(isFocused){
      if(!isLogin) {
        if(count >= 3) {
          navigation.navigate('HomeScreen')
          navigation.pop();
        }
        else {
          navigation.navigate('LoginHomeScreen')
        }
      }
    }
      else
      dispatch(getListOrderUser())
  }, [isFocused])

  const onSubmit = () => {
    dispatch(searchDetail(key));
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.search}>Nhập vào đơn hàng bạn muốn tìm:</Text>
      <View style={{paddingBottom: 10}}>
       <Searchbar
          placeholder="Nhập tên sản phẩm..."
          style={styles.input}
          onChangeText={(value) => setKey(value)}
          onSubmitEditing={onSubmit}
          />
      </View>
          
          {Object.keys(detail).length ? 
          (
            <>
            <View style={{alignItems: 'center'}}>
          <Text style={styles.titleOrder}>Chi tiết đơn hàng</Text>
          </View>
          <DetailOrderScreen/>
            </>
          )
          : <></>}
          

      </ScrollView>
    </View>
  )
}

export default OrderScreen