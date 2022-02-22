import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './HeaderFavoriteStyle'
import IconHeader from '../iconHeader/IconHeader'
import IconRightHeader from '../IconRightHeader/IconRightHeader'
import { Searchbar } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
import { COLORS } from '../../contains'
const HeaderFavorite = () => {
    const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.top}>
            <IconHeader/>
            <Searchbar
            placeholder="Nhập tên sản phẩm..."
            style={styles.input}
            
          />
            <View>
            <Entypo style={{marginRight: 15}} name="trash" size={30} color={COLORS.main} />
            </View>
      </View>
    </View>
  )
}

export default HeaderFavorite