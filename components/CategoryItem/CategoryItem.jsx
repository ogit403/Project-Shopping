import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import styles from './CategoryItemStyle'
import SkeletonContent from 'react-native-skeleton-content';
import { useSelector } from 'react-redux';
const Width = Dimensions.get('window').width - 30;

const CategoryItem = ({image, name}) => {
  const loading = useSelector(state => state.Home.loadingCate)
  
  if(loading) {
    return (

<SkeletonContent
    containerStyle={{ flex: 1, width: Width / 4.2 }}
    isLoading={loading}
    layout={[
      { key: 'categoryText1', width: '60%', height: 50, marginBottom: 6, borderRadius: 500 },
      { key: 'categoryText2', width: '100%', height: 20, marginBottom: 6, marginRight: 15 },
    ]}
  ></SkeletonContent>
    )
  }
  else 
  return (
    
     <View style={styles.itemCategory}>
        <View style={styles.wrapImage}>
            <Image style={styles.imageCategory} source={{uri: image}} />
        </View>
        <Text numberOfLines={2} style={styles.titleCategory}>{name}</Text>
    </View>

   
  )
}

export default CategoryItem