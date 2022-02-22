import { View, Text, Dimensions, Image } from 'react-native'
import React from 'react'
import styles from './SearchScreenStyle'
import { FormatPriceGold } from '../../help';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
const Width = Dimensions.get('window').width - 30;

const listProduct= [
  {id : 1}, {id: 2}, {id: 3},
  {id : 4}, {id: 5}, {id: 6},
  {id : 7}, {id: 8}, {id: 9},
  {id : 10}, {id: 11}, {id: 12}
]

const SearchScreen = () => {

  const renderProduct = () => {
    return listProduct.map((items, index) => {
      return (
        <Card key={index} style={styles.itemProduct}>
              <View style={styles.productSale}>
                <Text style={styles.productSaleTitle}>10%</Text>
              </View>
              <View style={styles.productFavorite}>
                <Text>
                <Ionicons name='ios-heart-outline' size={24} color={COLORS.gray} />;
                </Text>
              </View>
              <View style={styles.wrapProductImage}>
                <Image style={styles.productImage} source={require('../../assets/images/img.png')}/>
              </View>
              <View style={styles.wrapProductContent}>
                  <Text numberOfLines={2} style={styles.productTitle}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea cupiditate sed, ut animi iusto hic nemo minima libero facilis magnam deserunt nisi quae repudiandae maiores aperiam ipsam dicta, sint eaque.</Text>
                  <View style={styles.wrapPrice}>
                    <Text style={styles.productPrice}>{FormatPriceGold(23)}</Text>
                    <Text>
                    <AntDesign name="shoppingcart" size={30} color={COLORS.red} />
                    </Text>
                  </View>
              </View>
               
            </Card>
      )
    })

    
  }

  return (
    <View style={styles.container}>
      <View sytle={styles.title}>
        <Text style={{textAlign: 'center'}}>Có 20 kết quả tìm kiếm được với từ khóa "a"</Text>
      </View>
      <View style={styles.listProduct}>
          {renderProduct()}
      </View>

    </View>
  )
}

export default SearchScreen