import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './HeaderCateStyle'
import IconHeader from '../iconHeader/IconHeader'
import IconRightHeader from '../IconRightHeader/IconRightHeader'
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from '../../contains'
import { useNavigation } from '@react-navigation/native'
const HeaderCate = () => {
    const [text, setText] = useState('');
    const navigation = useNavigation();

    const changeFilter = () => {
      // console.log('filter')
      navigation.navigate('FilterMainScreen')
    }

  return (
    <View style={styles.container}>
      <View style={styles.top}>
            <IconHeader/>
            <Searchbar
            placeholder="Nhập tên sản phẩm..."
            style={styles.input}
            
          />
            <View>
            <AntDesign onPress={changeFilter} style={{marginRight: 15}} name="filter" size={30} color={COLORS.main} />
            </View>
      </View>
    </View>
  )
}

export default HeaderCate