import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import styles from './CategorySpecialStyle'
import CategorySpecialItem from '../CategorySpecialItem/CategorySpecialItem';

const CategorySpecial = ({title, data, loading}) => {



    const renderSpecial = ({item}) => {
      // console.log(item)
        return (
          <CategorySpecialItem 
            image={item?.image}
            name={item?.name}
            summary={item?.summary}
              price={item?.price}
             price_sale_off={item?.price_sale_off}
             id={item?.id}
             loading={loading}
             rating={item?.rating}
          />
        )
      }

  return (
    <View style={styles.categorySpecial}>
    <View>
      <Text style={styles.categoryTitle}>{title}</Text>
    </View>
    <View style={styles.wrapCategorySpecial}> 
      <FlatList
        data={data}
        renderItem={renderSpecial}
        keyExtractor={items => items.image.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  </View>
  )
}

export default CategorySpecial