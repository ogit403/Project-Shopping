import { AntDesign } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Rating } from 'react-native-elements';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../contains';
import { FormatPriceCoin, FormatPriceGold } from '../../help';
import styles from './DetailScreenStyle';
import { Avatar } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../../store/slices/detailSlice';
import Product from '../../components/Product/Product';
import { useScrollToTop } from '@react-navigation/native';
import { addItemCart } from '../../store/slices/cartSlice';
const DetailScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const ref = useRef(null);
  const { id } = route.params;
  const detail = useSelector(state => state.Detail.detail)
  const listFavorite = useSelector(state => state.Favorite.list);
  let listPro = useSelector(state => state.Home.product)
  // const loadingPro = use
  const listOrder = useSelector(state => state.Cart.list);
  // console.log(listOrder);

  const [count, setCount] = useState(1);
  // console.log(listPro)

  useEffect(() => {
    dispatch(getDetail(id))
    setCount(1)
    ref.current?.scrollTo({
      y : 0,
      animated : true
  });
    // useScrollToTop(useRef({
    //   scrollToTop: () => ref.current?.scrollToOffset({ offset: -100 }),
    // }));
  }, [id])

  const renderProduct = () => {
    return listPro.map((item, index) => {
      const isFavorite = listFavorite.find(items => items === item.id);
      const checkFavorite = isFavorite ? true : false;
      if(item.category_id === detail?.category_id)
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
          loading={false}
      />
      )
    })

    
  }

  const addProductCart = () => {
   
    dispatch(addItemCart({id, count, name: detail?.name, image: detail?.image, price: detail?.price, price_sale_off: detail?.price_sale_off, summary: detail?.summary, rating: detail?.rating}))
  }

  return (
    <View style={styles.container}>
      <View style={styles.background1}></View>
      <View style={styles.background2}></View>
      <ScrollView
       ref={ref}
        showsVerticalScrollIndicator={false}
      >
      <View style={styles.detail}>
          <View style={styles.wrapItem}>
            <View style={styles.wrapImage}>
                <Image style={styles.image} source={{uri: detail?.image}}/>
            </View>
            <View style={styles.wrapContent}>
              <Text numberOfLines={2} style={styles.title}>{detail?.name}</Text>
              <Text >{detail?.summary}</Text>
              <View style={{alignItems: 'flex-start', marginTop: 10}}>
              <Rating
              imageSize={18}
              defaultRating={detail?.rating}
              startingValue={detail?.rating}
              style={styles.specialRate}
              readonly={true}
            />
              </View>
              <Text style={styles.priceSale}>{FormatPriceCoin(detail?.price)}</Text>
              <View style={styles.wrapPriceMain}>
                <Text style={styles.priceMain}>{FormatPriceCoin(detail?.price_sale_off)}</Text>
              </View>
            </View>
           
          </View>
          <View style={styles.wrapDesc}>
              <Text style={styles.titleDesc}>Thông tin sản phẩm</Text>
              <Text style={styles.desc}>
                {detail?.description}
              </Text>
            </View>
              <Text style={styles.titleButton}>Số lượng</Text>
            <View style={styles.wrapButton}>
            <Button
                title="-"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: 'rgba(111, 202, 186, 1)',
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 70,
                  marginVertical: 10,
                }}
                onPress={() => {count > 1 ? setCount(count => count - 1) : ''}}
              />
              <Text style={styles.number}>{count}</Text>
              <Button
                title="+"
                loading={false}
                loadingProps={{ size: 'small', color: 'white' }}
                buttonStyle={{
                  backgroundColor: 'rgba(111, 202, 186, 1)',
                  borderRadius: 5,
                }}
                titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
                containerStyle={{
                  marginHorizontal: 50,
                  height: 50,
                  width: 70,
                  marginVertical: 10,
                }}
                onPress={() => setCount(count => count + 1)}
              />
            </View>
            <Text style={styles.titleButton}>Sản phẩm liên quan</Text>
            <View style={styles.listProduct}>
                {renderProduct()}
            </View>
            <Text style={styles.titleButton}>Nhận xét</Text>
            <View style={styles.wrapComment}>
                <View style={styles.itemComment}>
                    <View style={styles.wrapImageComment}>
                      <Avatar.Image size={80} source={require('../../assets/images/hinh-03.jpg')} />
                    </View>
                    <View style={styles.wrapContentComment}>
                        <Text style={styles.nameComment}>Nguyễn Hồng Quân</Text>
                        <Text style={styles.mainComment}>Sản phẩm này rất hay</Text>
                        <View style={styles.wrapImageContent}>
                            <Image style={styles.imageContent} source={require('../../assets/images/cate_2.png')} />
                            <Image style={styles.imageContent} source={require('../../assets/images/cate_3.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.itemComment}>
                    <View style={styles.wrapImageComment}>
                      <Avatar.Image size={80} source={require('../../assets/images/hinh-03.jpg')} />
                    </View>
                    <View style={styles.wrapContentComment}>
                        <Text style={styles.nameComment}>Nguyễn Hồng Quân</Text>
                        <Text style={styles.mainComment}>Sản phẩm này rất hay</Text>
                        <View style={styles.wrapImageContent}>
                            <Image style={styles.imageContent} source={require('../../assets/images/cate_2.png')} />
                            <Image style={styles.imageContent} source={require('../../assets/images/cate_3.png')} />
                        </View>
                    </View>
                </View>
            </View>
      </View> 
      </ScrollView>
      <View style={styles.buttonBottom}>
        <View style={styles.bottomTotal}>
          <Text style={[styles.bottom]}>Tổng cộng:</Text>
          <Text style={[styles.bottom, styles.bottomCount]}>{count} sản phẩm</Text>
        </View>
          <TouchableOpacity onPress={addProductCart}><Text style={[styles.bottom, styles.confirm]}>{FormatPriceCoin(detail?.price_sale_off * count)}</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default DetailScreen