import { View, Text, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { COLORS } from '../../contains'
import { SliderBox } from "react-native-image-slider-box";
import { useDispatch, useSelector } from 'react-redux';
import styles from './SliderStyle';
import { getSliderHome } from '../../store/slices/homeSlice';
import SkeletonContent from 'react-native-skeleton-content';
const Width = Dimensions.get('window').width - 30;
const Slider = () => {
    const listSlider = useSelector(state => state.Home.slider);
    const dispatch = useDispatch();
    const loading = useSelector(state => state.Home.loadingSlider)

    useEffect(() => {
      dispatch(getSliderHome())
    }, [])

    if(loading){
      return (
        <SkeletonContent
      containerStyle={{ flex: 1, width: '100%' }}
      isLoading={loading}
      layout={[
        { key: 'someId', width: '100%', height: 200, marginBottom: 6 },
      ]}
    ></SkeletonContent>
      )
    }
else
  return (
    <View style={styles.slider}>
      <SliderBox
      images={listSlider}
      dotColor={COLORS.main}
      inactiveDotColor={COLORS.white}
      parentWidth={Width}
      sliderBoxHeight={200}
      resizeMode="cover"
    />
    
  </View>
  )
}

export default Slider