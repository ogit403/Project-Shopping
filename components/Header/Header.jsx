import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import styles from './HeaderStyle'
import IconHeader from '../iconHeader/IconHeader'
import IconRightHeader from '../IconRightHeader/IconRightHeader'
import { Searchbar } from 'react-native-paper';
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
const Header = () => {
  const navigation = useNavigation();

    const handleSearch = () => {
      navigation.navigate('SearchHomeScreen')
    }

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
        <TouchableOpacity onPress={handleSearch}>
          <Searchbar
            placeholder="Nhập tên sản phẩm..."
            style={styles.input}
            editable={false}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header