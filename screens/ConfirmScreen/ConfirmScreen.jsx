import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ProductConfirm from '../../components/ProductConfirm/ProductConfirm';
import { postOrder } from '../../store/slices/cartSlice';
import styles from './ConfirmScreenStyle';


const ConfirmScreen = () => {
  const listData = useSelector(state => state.Cart.list);
  const user = useSelector(state => state.User.user)
  const dispatch = useDispatch();

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


  return (
    <View style={styles.container}>
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