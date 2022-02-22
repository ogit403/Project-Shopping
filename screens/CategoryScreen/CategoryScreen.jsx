import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import Slider from '../../components/Slider/Slider';
import { getCategory } from '../../store/slices/categorySlice';
import styles from './CategoryScreenStyle';
import { useRoute } from '@react-navigation/native';
import { initCategoryFilter } from '../../store/slices/filterSlice';

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  
  // console.log('route', route)
  const listFavorite = useSelector(state => state.Favorite.list);
  const listFilter = useSelector(state => state.Filter.filter);
  const listCategory = useSelector(state => state.Category.list);
  const loadingCategory = useSelector(state => state.Category.loadingList);
  const isCheck = listFilter.category ? true : false;
  // console.log(listFilter)

  useEffect(() => {
    if(route?.params?.id) {
      // console.log('abc')
      dispatch(initCategoryFilter(route?.params?.id))
    }
  }, [route])

  useEffect(() => {
    let min_price = listFilter.minPrice;
    let max_price = listFilter.maxPrice;
    let sortBy, order, is_new, special;
    switch(listFilter.items) {
      case 'price_asc': {
        sortBy = 'price';
        order = 'asc'
      } break;
      case 'price_desc': {
        sortBy = 'price';
        order = 'desc'
      } break;
      case 'old': {
        sortBy = 'id';
        order = 'desc'
      } break;
      case 'new': {
        sortBy = 'id';
        order = 'asc'
      } break;
      case 'is_new': {
        is_new = true;
      } break;
      case 'special': {
        special = true;
      } break;
      case 'price_sale_off': {
        sortBy = 'price_sale_off';
        order = 'desc'
      } break;
      default: break;
    }

    dispatch(getCategory({min_price, max_price, sortBy, order, is_new, special}))

  }, [listFilter])

  const renderProduct = () => {
  
    return listCategory.map((item, index) => {
      const isFavorite = listFavorite.find(items => items === item.id);
      const checkFavorite = isFavorite ? true : false;
      if(isCheck) {
        // console.log(listCategory.category)
        if(item.category_id === listFilter.category) {
          return (
            <Product
              key={index}
              image={item?.image}
                name={item?.name}
                  price={item?.price}
                 price_sale_off={item?.price_sale_off}
                 id={item.id}
                 checkFavorite={checkFavorite}
                 summary={item?.summary}
                 rating={item?.rating}
                 loading={loadingCategory}
            />
          )
        }
      }
      else
      return (
        <Product
          key={index}
          image={item?.image}
            name={item?.name}
              price={item?.price}
             price_sale_off={item?.price_sale_off}
             id={item.id}
             checkFavorite={checkFavorite}
             summary={item?.summary}
             rating={item?.rating}
             loading={loadingCategory}
        />
      )
    })
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      > 
        <Slider/>
        <View style={styles.listProduct}>
          {renderProduct()}
        </View>
        </ScrollView>
    </View>
  )
}

export default CategoryScreen