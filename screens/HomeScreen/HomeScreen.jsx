import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Button, FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import CategorySpecial from '../../components/CategorySpecial/CategorySpecial';
import Product from '../../components/Product/Product';
import Slider from '../../components/Slider/Slider';
import { getCateHome, getProductHome, getProductNewHome, getProductSpecHome, getSliderHome } from '../../store/slices/homeSlice';
import styles from './HomeScreenStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { getInfoUser } from '../../store/slices/userSlice';
import { Video, AVPlaybackStatus } from 'expo-av';

const HomeScreen = () => {
  const dispatch = useDispatch(); 
  const listCate = useSelector(state => state.Home.cate)
  const listPro = useSelector(state => state.Home.product)
  const listProNew = useSelector(state => state.Home.productNew)
  const listProSpec = useSelector(state => state.Home.productSpec)
  const listFavorite = useSelector(state => state.Favorite.list);
  const loadingNew = useSelector(state => state.Home.loadingProductNew)
  const loadingSpec = useSelector(state => state.Home.loadingProductSpec)
  const loadingProduct = useSelector(state => state.Home.loadingProduct)
    // console.log(loadingNew)
  // console.log('list 12', listOrder)
  // console.log('hello')
  const navigation = useNavigation();
  const token1 = useSelector(state => state.User.token);
  // console.log('token', token1)

  useEffect(() => {
    dispatch(getCateHome())
    dispatch(getProductHome())
    dispatch(getProductNewHome())
    dispatch(getProductSpecHome())
    dispatch(getInfoUser());
    dispatch(getSliderHome())
  },[])

  useEffect(() => {
    const setHeader = async () => {
      let token = await AsyncStorage.getItem('token');
      // console.log('axios', token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }
    setHeader();
  }, [navigation])

 
   const handleChangeCate = (id) => {
    navigation.navigate('Category123123', {id: id})
   }

  const renderData = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handleChangeCate(item.id)}>
        <CategoryItem image={item?.image} name={item?.name} />

      </TouchableOpacity>
    )
  }


  const renderProduct = () => {
     

    return listPro.map((item, index) => {
      const isFavorite = listFavorite.find(items => items === item.id);
      const checkFavorite = isFavorite ? true : false;
      // console.log(listFavorite)
      // console.log(items)
      return (
        <Product
          key={index}
          image={item?.image}
            name={item?.name}
              price={item?.price}
             price_sale_off={item?.price_sale_off}
             id={item?.id}
             checkFavorite={checkFavorite}
             summary={item?.summary}
             rating={item?.rating}
             loading={loadingProduct}
        />
      )
    })

    
  }

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <Slider/>
        
        <View style={styles.container}>
      {/* <Video
        ref={video}
        style={{width: '100%', height: 300}}
        source={{
          uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      /> */}
      
      </View>

      <View style={styles.category}>
        <FlatList
          data={listCate}
          renderItem={renderData}
          keyExtractor={items => items.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
     <CategorySpecial loading={loadingSpec} data={listProSpec} title="S???n ph???m ?????c bi???t" />
     <CategorySpecial loading={loadingNew} data={listProNew} title="S???n ph???m m???i" />

      <View style={styles.listProduct}>
          {renderProduct()}
      </View>
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
      </ScrollView>
      
    </View>
  )
}

export default HomeScreen