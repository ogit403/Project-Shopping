import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './IconRightHeaderStyle'
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from '../../contains';
import { Badge } from 'react-native-paper';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const IconRightHeader = () => {
  const navigation = useNavigation();
  const listOrder = useSelector(state => state.Cart.list)

  const changeScreen = () => {
    navigation.navigate('CartHomeScreen')
  }

  return (
    <TouchableOpacity onPress={changeScreen} style={styles.container}>
      <AntDesign name="shoppingcart" size={30} color={COLORS.main} />
      <Badge style={styles.badge}>{listOrder?.length || 0}</Badge>
    </TouchableOpacity>
  )
}

export default IconRightHeader