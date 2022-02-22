import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import styles from './CategorySpecialItemStyle'
import { FormatPriceCoin } from '../../help'
import { Rating, RatingProps } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from '../../contains';
import { useDispatch, useSelector } from 'react-redux';
import { addItemCart } from '../../store/slices/cartSlice';
import SkeletonContent from 'react-native-skeleton-content';
const Width = Dimensions.get('window').width - 30;

const CategorySpecialItem = ({id, image, name, summary, price, price_sale_off, rating, loading}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const changeScreen = () => {
    navigation.navigate('DetailHomeScreen', {id, title: name})
  }

  const addCart = () => {
    dispatch(addItemCart({id, count: 1, name, image, price, price_sale_off, summary, rating}))
  }
  if(loading){
    return (
<SkeletonContent
    containerStyle={{ flex: 1, width: Width - 100, flexDirection: 'row' }}
    isLoading={true}
    layout={[
      { key: 'categoryText12', width: '30%', height: 120, marginBottom: 6, borderRadius: 20, marginRight: 15 },
      { key: 'categoryText23', width: '50%', height: 120, marginBottom: 6, marginRight: 15 },
    ]}
  ></SkeletonContent>
    )
  }
  else
  return (
    

<View style={styles.itemCategorySpecial}>
    <View style={styles.specialWrapImage}>
      <TouchableOpacity onPress={changeScreen}>
      <Image style={styles.specialImage} source={{uri: image}} />
      </TouchableOpacity>
    </View>
    <View style={styles.specialWrapContent}>
      <TouchableOpacity onPress={changeScreen}>
        <Text style={styles.specialTitle}>{name}</Text>
      </TouchableOpacity>
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
</View>

    
  )
}

export default CategorySpecialItem