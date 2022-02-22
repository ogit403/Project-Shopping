import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './CartScreenStyle'
import { FormatPriceCoin, FormatPriceGold } from '../../help'
import { Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 

import { COLORS } from '../../contains';
import { useSelector } from 'react-redux';
import ProductCart from '../../components/ProductCart/ProductCart';
import { useNavigation } from '@react-navigation/native';
const CartScreen = () => {
  const listData = useSelector(state => state.Cart.list);
  const navigation = useNavigation();
  // console.log(listData);

  const renderListData = () => {
    if(listData.length === 0)
    return <Text>Giỏ hàng hiện tại chưa có sản phẩm</Text>

    return listData.map((item, index) => {
      return (
        <ProductCart
          key={index}
          id={item?.id}
          count={item?.count}
          image={item?.image}
          name={item?.name}
          price={item?.price}
          price_sale_off={item?.price_sale_off}
          rating={item?.rating}
          summary={item?.summary}
        />
      )
    })
  }

  const onSubmit = () => {
    navigation.navigate('ConfirmHomeScreen')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.titleMain}>Danh sách sản phẩm</Text>
        {renderListData()}
      
      </ScrollView>
      <View style={styles.buttonBottom}>
          <TouchableOpacity onPress={onSubmit}><Text style={styles.bottom}>Tiến hành đặt hàng</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default CartScreen