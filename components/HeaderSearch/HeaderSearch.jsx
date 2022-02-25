import { View, Text } from 'react-native'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styles from './HeaderSearchStyle'
import IconHeader from '../iconHeader/IconHeader'
import IconRightHeader from '../IconRightHeader/IconRightHeader'
import { Searchbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from '../../contains'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { saveKeywordSearch, searchValue } from '../../store/slices/searchSlice'
import { Keyboard } from 'react-native'
const HeaderSearch = () => {
    const [text, setText] = useState('');
    const navigation = useNavigation();
    const inputRef = useRef();
    const isFocused = useIsFocused();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.Search.loadingSearch)

    useLayoutEffect(() => {
      let interval;
       if(isFocused) {
          interval = setInterval(function() {
          // console.log('focus');
          inputRef?.current?.focus();
          clearInterval(interval); 
         }, 1000);
        }
       return () => { clearInterval(interval); };
      //  clearInterval(interval);
    }, [isFocused])

    const backHome = () => {
      navigation.goBack();
    }

    const onSubmit = () => {
      dispatch(saveKeywordSearch(text));
      dispatch(searchValue(text))
    }


  return (
    <View style={styles.container}>
      <Searchbar
            placeholder="Nhập tên sản phẩm..."
            style={styles.input}
            ref={inputRef}
            onSubmitEditing={onSubmit}
            onChangeText={(value) => setText(value)}
      />
      <Text onPress={backHome} style={styles.text}>Thoát</Text>
    </View>
  )
}

export default HeaderSearch