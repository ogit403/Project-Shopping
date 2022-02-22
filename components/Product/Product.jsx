import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FormatPriceCoin, SalePercent } from '../../help';
import { COLORS } from '../../contains';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import styles from './ProductStyle';
import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/slices/favoriteSlice';
import { useNavigation } from '@react-navigation/native';
import { Rating, RatingProps } from 'react-native-elements';
import { addItemCart } from '../../store/slices/cartSlice';
import SkeletonContent from 'react-native-skeleton-content';
const WidthProduct = Dimensions.get('window').width - 50;
const Product = ({price, price_sale_off, image, name, id, checkFavorite, summary, rating, loading}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleFavorite = () => {
    dispatch(toggleFavorite(id))
  }

  const changeScreen = () => {
    navigation.navigate('DetailHomeScreen', {id, title: name})
  }

  const addCart = () => {
    dispatch(addItemCart({id, count: 1, name, image, price, price_sale_off, summary, rating}))
  }

  if(!loading) {
    return (
      <Card style={styles.itemProduct}>
        <View style={styles.productSale}>
        <Text style={styles.productSaleTitle}>{SalePercent(price, price_sale_off)}</Text>
        </View>
        <View style={styles.productFavorite}>
        <Text  onPress={handleFavorite}>
        <Ionicons name={checkFavorite ? 'ios-heart' : 'ios-heart-outline'} size={24} color={COLORS.main} />
        </Text>
        </View>
        <View onPress={changeScreen} style={styles.wrapProductImage}>
        <Image style={styles.productImage} source={{uri: image}}/>
        </View>
        <View style={styles.wrapProductContent}>
            <Text onPress={changeScreen} numberOfLines={2} style={styles.productTitle}>{name}</Text>
            <Text onPress={changeScreen} style={styles.specialDetail}>{summary}</Text>
            <View style={{alignItems: 'flex-start'}}>
            <Rating
              imageSize={18}
              defaultRating={rating}
              startingValue={rating}
              style={styles.specialRate}
              readonly={true}
            />
            </View>
            <View style={styles.wrapPrice}>
            <View>
            <Text style={styles.specialPriceSale}>{FormatPriceCoin(price || 0)}</Text>
            <Text style={styles.specialPrice}>{FormatPriceCoin(price_sale_off || 0)}</Text>

            </View>
            <TouchableOpacity onPress={addCart}>
             <AntDesign name="shoppingcart" size={30} color={COLORS.red} />
            </TouchableOpacity>
            </View>
        </View>

    </Card>
    )
  }
  else
  return (
    <Card style={styles.itemProduct}>
        <SkeletonContent
        containerStyle={{ flex: 1, width: '100%' }}
        isLoading={loading}
        layout={[
          { key: 'someId123', width: '100%', height: 200 },
        ]}
      >
        
    </SkeletonContent>
      </Card>
  )
}

export default Product