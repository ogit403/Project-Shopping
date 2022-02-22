import { View, Text } from 'react-native'
import React from 'react'
import styles from './NotifyScreenStyle'

const NotifyScreen = () => {
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