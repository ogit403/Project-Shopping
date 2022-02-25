import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductConfirm from '../../components/ProductConfirm/ProductConfirm';
import { postOrder, resetCheckOrder } from '../../store/slices/cartSlice';
import styles from './ConfirmScreenStyle';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { getInfoUser } from '../../store/slices/userSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';  
const ConfirmScreen = () => {
  const listData = useSelector(state => state.Cart.list);
  const isLogin = useSelector(state => state.User.isLogin)
  const navigation = useNavigation();
  const user = useSelector(state => state.User.user)
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [count, setCount] = useState(0);
  const checkOrder = useSelector(state => state.Cart.checkOrder);
  const DetailOrder = useSelector(state => state.Cart.order);
  // const [visible, setVisible] = useState(checkOrder);

  const showModal = () => setVisible(true);
  const hideModal = () => {
    dispatch(resetCheckOrder())
  }
  useEffect(() => {
    dispatch(getInfoUser());
  },[])

  useEffect(() => {
    const setHeader = async () => {
      let token = await AsyncStorage.getItem('token');
      // console.log('axios', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    setHeader();
  }, [navigation])


  useEffect(() => {
    dispatch(resetCheckOrder())
  }, [])

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
  }, [isFocused])

  const postOrderFinish = () => {
    let newOrder = [];
    listData.map(item => {
      newOrder = [...newOrder, {
        product_id: item.id,
        quantity: item.count
      }]
    })
    dispatch(postOrder(newOrder))
  }


  const renderListData = () => {
    if(listData.length === 0)
    return <Text>Giỏ hàng hiện tại chưa có sản phẩm</Text>

    return listData.map((item, index) => {
      return (
        <ProductConfirm
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

  const ChangeScreen = (name) => {
    navigation.navigate(name)
  }

  return (
    <View style={styles.container}>
      <Portal>
       <Modal visible={checkOrder} onDismiss={hideModal} contentContainerStyle={styles.modal}>
            <Text style={styles.titleModal}>THÔNG BÁO</Text>
            <View style={styles.wrapImageModal}>
              <Image style={styles.imageModal} source={require('../../assets/images/checked.png')} />
            </View>
            <Text style={styles.successModal}>Đặt hàng thành công</Text>
            <View style={styles.orderModal}><Text>Mã số đơn hàng của bạn </Text><Text style={styles.idOrder}>#{DetailOrder?.id}</Text></View>
            <View style={styles.wrapButtonModal}>
              <TouchableOpacity onPress={() => ChangeScreen('HomeMainScreen')}>
              <Text style={styles.continueModal}>Tiếp tục mua hàng</Text>

              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => ChangeScreen('OrderScreen')}>

              <Text style={styles.detailModal}>Chi tiết đơn hàng</Text>
              </TouchableOpacity> */}
            </View>
        </Modal>
        
      </Portal>

      <ScrollView>
      {renderListData()}

      <View style={styles.confirm}>
          <Text style={styles.titleConfirm}>Xác nhận thông tin</Text>
      </View>

      {/* <View style={styles.groupButtonConfirm}>
        <Text style={styles.buttonConfirm}>Đăng nhập để tiếp tục</Text>
      </View> */}

      <View style={styles.address}>
          <View style={styles.itemAddress}>
              <Text style={styles.addressName}>{user?.name} - {user?.phone}</Text>
              <Text style={styles.addressContent}>{user?.address}</Text>
          </View>
      </View>
      {/* <Text style={styles.changeTitle}>Thay đổi địa chỉ</Text> */}
      
      </ScrollView>
      <View style={styles.buttonBottom}>
        <TouchableOpacity onPress={postOrderFinish}>
          <Text style={styles.bottom}>Đặt hàng</Text>
        </TouchableOpacity>
      
      </View>
    </View>
  )
}

export default ConfirmScreen