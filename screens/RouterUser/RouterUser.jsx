import { View, Text } from 'react-native'
import React from 'react'
import styles from './RouterUserStyle'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'; 
const RouterUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
      <Text style={styles.main} onPress={() => navigation.navigate('UserScreen')}>
        Thông tin cá nhân
        </Text>
        <AntDesign name="rightcircleo" size={24} color="black" />
      </View>
      <View style={styles.wrap}>
      <Text style={styles.main} onPress={() => navigation.navigate('OrderScreen')}>Đơn hàng</Text>
      <AntDesign name="rightcircleo" size={24} color="black" />
      </View>
      <View style={styles.wrap}>
      <Text style={styles.main} onPress={() => navigation.navigate('NotifyScreen')}>Thông báo</Text>
      <AntDesign name="rightcircleo" size={24} color="black" />
      </View>
    </View>
  )
}

export default RouterUser