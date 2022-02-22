import { View, Text,Image, FlatList, ScrollView, TouchableOpacity  } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './FilterScreenStyle'
import { Chip } from 'react-native-paper';
import RangeSlider from 'react-native-range-slider-expo';
import { FormatPriceCoin } from '../../help';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { toggleFilter } from '../../store/slices/filterSlice';
import { getCateHome } from '../../store/slices/homeSlice';

const FilterScreen = () => {
  const dispatch = useDispatch();
  const listCate = useSelector(state => state.Home.cate)
  const listFilter = useSelector(state => state.Filter.filter)
  const [filter, setFilter] = useState(listFilter)

  useEffect(() => {
    dispatch(getCateHome())
  }, [])

  const handleCategory = (id) => {
    if(id === filter.category) setFilter({...filter, category: null})
    else
    setFilter({...filter, category: id})
  }

  const renderData = ({item}) => {
    return (
      <TouchableOpacity style={filter.category === item.id ? styles.activeCategory : {}} onPress={() => handleCategory(item.id)}>
        <CategoryItem image={item?.image} name={item?.name} />
      </TouchableOpacity>
    )
  }

  const handleItems = (value) => {
    if(value === filter.items) setFilter({...filter, items: ''})
    else
    setFilter({...filter, items: value})
  }

  const handlePost = () => {
    dispatch(toggleFilter(filter))
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
          <Text style={styles.title}>Lọc theo sản phẩm</Text>
      <View style={styles.wrapChip}>
        <Chip style={[styles.chip, filter.items === 'price_asc' ? styles.chipActive : {}]} onPress={() => handleItems('price_asc')}>Giá Tăng Dần</Chip>
        <Chip style={[styles.chip, filter.items === 'price_desc' ? styles.chipActive : {}]} onPress={() => handleItems('price_desc')}>Giá Giảm Dần</Chip>
        <Chip style={[styles.chip, filter.items === 'is_new' ? styles.chipActive : {}]} onPress={() => handleItems('is_new')}>Sản phẩm mới</Chip>
        <Chip style={[styles.chip, filter.items === 'special' ? styles.chipActive : {}]} onPress={() => handleItems('special')}>Sản phẩm nổi bật</Chip>
        <Chip style={[styles.chip, filter.items === 'old' ? styles.chipActive : {}]} onPress={() => handleItems('old')}>Cũ nhất</Chip>
        <Chip style={[styles.chip, filter.items === 'new' ? styles.chipActive : {}]} onPress={() => handleItems('new')}>Mới nhất</Chip>
        <Chip style={[styles.chip, filter.items === 'price_sale_off' ? styles.chipActive : {}]} onPress={() => handleItems('sale')}>Đang giảm giá</Chip>
      </View>
      <Text style={styles.titlePrice}>Lọc theo giá</Text>
      <View style={styles.wrapRange}>
          <RangeSlider min={0} max={50000000}
            step={100000}
              fromValueOnChange={value => setFilter({...filter, minPrice: value})}
              toValueOnChange={value => setFilter({...filter, maxPrice: value})}
              showValueLabels={false}
              initialFromValue={filter.minPrice}
              initialToValue={filter.maxPrice}
        />
      </View>
      <View style={styles.wrapPrice}>
          <Text>Giá từ: {FormatPriceCoin(filter.minPrice)}</Text>
          <Text>Đến: {FormatPriceCoin(filter.maxPrice)}</Text>
      </View>
      <Text style={styles.titlePrice}>Lọc theo danh mục</Text>
      <View style={styles.wrapCate}>
      <View style={styles.category}>
        <FlatList
          data={listCate}
          renderItem={renderData}
          keyExtractor={items => items.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      </View>
      </ScrollView>
    
      <View style={styles.buttonBottom}>
          <TouchableOpacity onPress={handlePost}><Text style={styles.bottom}>Áp dụng</Text></TouchableOpacity>
      </View>

    </View>
  )
}

export default FilterScreen