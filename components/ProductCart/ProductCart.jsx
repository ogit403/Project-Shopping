import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './ProductCartStyle'
import { FormatPriceCoin } from '../../help'
import { EvilIcons } from '@expo/vector-icons';
import { COLORS } from '../../contains';
import { Rating, RatingProps } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { countItemCart, removeItemCart } from '../../store/slices/cartSlice';
const ProductCart = ({count, image, name, price, price_sale_off, id, rating, summary}) => {
    const dispatch = useDispatch();

    const countProduct = (type) => {
        dispatch(countItemCart({type, id}))
    }

    const deleteProduct = () => {
        dispatch(removeItemCart(id))
    }

  return (
    <View style={styles.item}>
    <View style={styles.wrapImage}>
      <Image style={styles.image} source={{uri: image}}/>
    </View>
    <View style={styles.wrapContent}>
      <Text numberOfLines={2} style={styles.title}>{name}</Text>
      <Text style={styles.specialDetail}>{summary}</Text>
    <View style={{alignItems: 'flex-start'}}>
    <Rating
        imageSize={18}
        defaultRating={rating}
        startingValue={rating}
        style={styles.specialRate}
        readonly={true}
    />
    </View>
      <Text style={styles.specialPriceSale}>{FormatPriceCoin(price)}</Text>
      <Text style={styles.specialPrice}>{FormatPriceCoin(price_sale_off)}</Text>
      <View style={styles.wrapNumber}>
          <TouchableOpacity onPress={() => countProduct('-')} style={styles.wrapButton}>
            <Text style={styles.button}>-</Text>
          </TouchableOpacity>
          <Text style={styles.number}>{count}</Text>  

          <TouchableOpacity onPress={() => countProduct('+')} style={styles.wrapButton}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
      <View style={styles.wrapPrice}>
        <View style={styles.wrap}>
          <Text>Thành tiền:</Text>
          <Text style={styles.priceTotal}>{FormatPriceCoin(count * price_sale_off)}</Text>
        </View>
        <TouchableOpacity onPress={deleteProduct}>

      <EvilIcons name="trash" size={30} color={COLORS.main} />
        </TouchableOpacity>
      </View>
    </View>
</View>
  )
}

export default ProductCart