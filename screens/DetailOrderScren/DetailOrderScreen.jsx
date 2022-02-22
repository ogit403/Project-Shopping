import { View, Text, Image } from 'react-native'
import React from 'react'

import StepIndicator from 'react-native-step-indicator';
import { FormatPriceCoin } from '../../help';
import styles from './DetailOrderScreenStyle';
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

const DetailOrderScreen = () => {
  return (
    <View style={styles.wrapOrder}>
            <Text style={styles.titleOrder}>Danh sách sản phẩm</Text>
                <View style={styles.item}>
                  <View style={styles.wrapImage}>
                    <Image style={styles.image} source={require('../../assets/images/cate_4.png')}/>
                  </View>
                  <View style={styles.wrapContent}>
                    <Text numberOfLines={2} style={styles.title}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore officia debitis porro eligendi ipsum totam nisi eius? Eaque placeat veniam aperiam consequuntur, adipisci itaque eveniet voluptatem, facere nulla sequi illo.</Text>
                    <View style={styles.wrapCount}>
                      <Text style={styles.price}>{FormatPriceCoin(23)}</Text>
                      <View style={styles.count}>
                          <Text>Số lượng:</Text>
                          <Text style={styles.countTotal}>2</Text>
                        </View>
                    </View>
                    <View style={styles.wrapPrice}>
                      <View style={styles.wrap}>
                        <Text>Thành tiền:</Text>
                        <Text style={styles.priceTotal}>{FormatPriceCoin(46)}</Text>
                      </View>
                    </View>
                  </View>
              
              
              
              
              </View>
              <Text style={styles.titleOrder}>Thông tin người nhận</Text>
              <View style={styles.infoUser}>
                  <View style={styles.groupInfo}>
                    <Text style={styles.infoName}>Họ và tên:</Text>
                    <Text style={styles.infoContent}>Nguyễn Hồng Quân</Text>
                  </View>
                  <View style={styles.groupInfo}>
                    <Text style={styles.infoName}>Số điện thoại:</Text>
                    <Text style={styles.infoContent}>0938671555</Text>
                  </View>
                  <View style={styles.groupInfo}>
                  <Text style={styles.infoName}>Địa chỉ:</Text>
                  <Text style={styles.infoContent}>234 Nguyễn Duy Trinh, thành Phố Hồ Chí Minh</Text>

                  </View>
              </View>
              <Text style={styles.titleOrder}>Trạng thái đơn hàng</Text>
              <View style={styles.wrapStep}>
                <StepIndicator
                    customStyles={customStyles}
                    currentPosition={1}
                    labels={labels}
                />
              </View>
          </View>
  )
}

export default DetailOrderScreen