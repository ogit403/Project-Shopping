import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './OrderScreenStyle'
import { Searchbar } from 'react-native-paper';
import { FormatPriceGold } from '../../help';

import StepIndicator from 'react-native-step-indicator';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrderUser } from '../../store/slices/userSlice';
import DetailOrderScreen from '../DetailOrderScren/DetailOrderScreen';
import { searchDetail } from '../../store/slices/orderSlice';
 
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
  const listOrder = useSelector(state => state.User.listOrder);
  const detail = useSelector(state => state.Order.detail);
  // console.log(detail)

  useEffect(() => {
      dispatch(getListOrderUser())
  }, [])

  const searchOrder = () => {
    dispatch(searchDetail(40));
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text onPress={searchOrder} style={styles.search}>Nhập vào đơn hàng bạn muốn tìm:</Text>
       <Searchbar
          placeholder="Nhập tên sản phẩm..."
          style={styles.input}
          />
          <Text style={styles.titleOrder}>Chi tiết đơn hàng</Text>
          <DetailOrderScreen/>

      </ScrollView>
    </View>
  )
}

export default OrderScreen