import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './HeaderStyle'
import IconHeader from '../iconHeader/IconHeader'
import IconRightHeader from '../IconRightHeader/IconRightHeader'
import { Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux'
const Header = () => {
    const [text, setText] = useState('');
   

  return (
    <View style={styles.container}>
      <View style={styles.top}>
            <IconHeader/>
            <Text style={styles.title}>Trang chủ</Text>
            <View>
                <IconRightHeader/>
            </View>
      </View>
      <View style={styles.bottom}>
          <Searchbar
            placeholder="Nhập tên sản phẩm..."
            style={styles.input}
            
          />
      </View>
    </View>
  )
}

export default Header