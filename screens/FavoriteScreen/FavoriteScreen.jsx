import { View, Text, Image, Dimensions, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from './FavoriteScreenStyle'
import {COLORS, SELECT_STYLES} from '../../contains'
import { Rating, RatingProps } from 'react-native-elements';
import { FormatPriceCoin, FormatPriceGold } from '../../help';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
const Width = Dimensions.get('window').width - 30;
import { SalePercent } from '../../help'
import Product from '../../components/Product/Product';

const FavoriteScreen = () => {
  const listFavorite = useSelector(state => state.Favorite.list);
  const listPro = useSelector(state => state.Home.product)
  const listItems = listFavorite.map(favorite => {
    const item = listPro.find(pro => pro.id === favorite);
    if(item) return item;
  });
  // console.log(listItems)

  const renderProduct = () => {

    if(listItems.length === 0)
      return <Text>Hiện chưa có sản phẩm yêu thích nào.</Text>

    return listItems.map((item, index) => {
      return (
        <Product
          key={index}
          image={item?.image}
          name={item?.name}
          price={item?.price}
          price_sale_off={item?.price_sale_off}
          id={item.id}
          checkFavorite={true}
          summary={item?.summary}
          rating={item?.rating}
          loading={null}
        />
      )
    })

    
  }

  return (
    <View style={styles.container}>
       <View style={styles.listProduct}>
          {renderProduct()}
      </View>
    </View>
  )
}

export default FavoriteScreen