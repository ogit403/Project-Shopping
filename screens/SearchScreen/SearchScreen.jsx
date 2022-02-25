import { View, Text, Dimensions, Image, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import styles from './SearchScreenStyle'
import { FormatPriceGold } from '../../help';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import { Keyboard } from 'react-native'
const Width = Dimensions.get('window').width - 30;

const SearchScreen = () => {
  const keyword = useSelector(state => state.Search.keyword)
  const loading = useSelector(state => state.Search.loadingSearch)
  const listData = useSelector(state => state.Search.list)
  const listFavorite = useSelector(state => state.Favorite.list);

  useEffect(() => {
    Keyboard.dismiss();
  }, [keyword])

  console.log(loading);

  const renderProduct = () => {
    return listData.map((item, index) => {
      const isFavorite = listFavorite.find(items => items === item.id);
      const checkFavorite = isFavorite ? true : false;

      return (
        <Product
          key={index}
          image={item?.image}
            name={item?.name}
              price={item?.price}
             price_sale_off={item?.price_sale_off}
             id={item?.id}
             checkFavorite={checkFavorite}
             summary={item?.summary}
             rating={item?.rating}
             loading={loading}
        />
      )
    })

    
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode={!loading ? 'none' : ''}
      >
        <View sytle={styles.title}>
        {
          keyword === '' ?
        <Text style={{textAlign: 'center'}}>Nhập tên sản phẩm bạn muốn tìm kiếm</Text>
        : <Text style={{textAlign: 'center'}}>Tìm thấy {listData?.length} sản phẩm với từ khóa {keyword} </Text>
        }
      </View>
      <View style={styles.listProduct}>
          {renderProduct()}
      </View>
      </ScrollView>
    </View>
  )
}

export default SearchScreen