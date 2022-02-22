import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './HeaderSearchStyle'
import IconHeader from '../iconHeader/IconHeader'
import IconRightHeader from '../IconRightHeader/IconRightHeader'
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from '../../contains'
const HeaderSearch = () => {
    const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Searchbar
            placeholder="Nhập tên sản phẩm..."
            style={styles.input}
            
          />
    </View>
  )
}

export default HeaderSearch