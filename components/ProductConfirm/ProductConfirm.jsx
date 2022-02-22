import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './ProductConfirmStyle'
import { FormatPriceCoin } from '../../help'

const ProductConfirm = ({image, name, price, price_sale_off, count, summary}) => {
  return (
    <View style={styles.item}>
          <View style={styles.wrapImage}>
            <Image style={styles.image} source={{uri: image}}/>
          </View>
          <View style={styles.wrapContent}>
            <Text numberOfLines={2} style={styles.title}>{name}</Text>
            <Text style={styles.specialDetail}>{summary}</Text>
            <View style={styles.wrapCount}>
                <View>
                <Text style={styles.specialPriceSale}>{FormatPriceCoin(price)}</Text>
            <Text style={styles.specialPrice}>{FormatPriceCoin(price_sale_off)}</Text>
                </View>
              <View style={styles.count}>
                  <Text>Số lượng:</Text>
                  <Text style={styles.countTotal}>{count}</Text>
                </View>
            </View>
            <View style={styles.wrapPrice}>
              <View style={styles.wrap}>
                <Text>Thành tiền:</Text>
                <Text style={styles.priceTotal}>{FormatPriceCoin(count * price_sale_off)}</Text>
              </View>
            </View>
          </View>
      </View>
  )
}

export default ProductConfirm