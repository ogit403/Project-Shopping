import { View, Text } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import styles from './NotifyScreenStyle'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused, useNavigation } from '@react-navigation/native'

const NotifyScreen = () => {
    const isLogin = useSelector(state => state.User.isLogin)
    const navigation = useNavigation();
    // console.log(user)
    const dispatch = useDispatch();
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
    }, [isFocused])


  return (
    <View style={styles.container}>
       <Text style={styles.title}>Đánh dấu tất cả</Text>
       <View style={styles.address}>
          <View style={[styles.itemAddress, styles.active]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>

      </View>
    </View>
  )
}

export default NotifyScreen