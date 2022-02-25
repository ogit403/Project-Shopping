import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styles from './InfoScreenStyle'
import { Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 
import { COLORS } from '../../contains';
import { Ionicons } from '@expo/vector-icons'; 
// import { TextInput } from 'react-native-paper';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser, updateInfoUser } from '../../store/slices/userSlice';
import { useNavigation, StackActions, useIsFocused, useFocusEffect  } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';
import MapView from 'react-native-maps';
const InfoScreen = () => {
  const [visible, setVisible] = useState(false);
  const user = useSelector(state => state.User.user);
  const isLogin = useSelector(state => state.User.isLogin)
  const loadingUpdate = useSelector(state => state.User.loadingUpdate);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState({
    name: user?.name,
    phone: user?.phone,
    address: user?.address,
  })

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setCurrent({
      name: user?.name,
      phone: user?.phone,
      address: user?.address,
    })
    setVisible(false);
  }

  useEffect(() => {
    if(!loadingUpdate) hideModal();
  }, [loadingUpdate])

 
  // console.log(user)
  useLayoutEffect(() => {
    setCount(count => count + 1);
    if(isFocused){
      if(!isLogin) {
        if(count >= 3) {
          navigation.navigate('HomeScreen')
          navigation.pop();
        }
        else {
          navigation.navigate('LoginHomeScreen')
        }
      }
      else{
        console.log('vao info')
        dispatch(getInfoUser());
      }
    } 
  }, [isFocused])

  const changeUser = () => {
    if(current.address === '' || current.email === '' || current.name === '' || current.phone === '') {
      showMessage({
        message: 'Vui lòng điền đầy đủ thông tin',
        type: 'warning',
        duration: 2000
      })
      return;
    }

    dispatch(updateInfoUser({
      name: current.name,
      phone: current.phone,
      address: current.address,
    }))
    
  }

  if(!isLogin) return <></>
  else
  return (
    <View style={styles.container}>
       <Portal>
       <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <Text style={styles.titleModal}>Thay đổi thông tin</Text>

          <View style={styles.mainModal}>
          <View style={styles.groupInput}>
               <Text style={styles.titleInput}>Họ và tên:</Text>
              <TextInput
                label="Họ và tên:"
                value={current.name}
                style={styles.contentInput}
                onChangeText={(value) => setCurrent({...current, name: value})}
              />
          </View>
          <View style={styles.groupInput}>
          <Text style={styles.titleInput}>Địa chỉ:</Text>
              <TextInput
                label="Địa chỉ mặc định:"
                value={current.address}
                style={styles.contentInput}
                onChangeText={(value) => setCurrent({...address, name: value})}
              />
          </View>
          <View style={styles.groupInput}>
          <Text style={styles.titleInput}>Số điện thoại:</Text>
              <TextInput
                label="Số điện thoại:"
                value={current.phone}
                style={styles.contentInput}
                onChangeText={(value) => setCurrent({...current, phone: value})}
              />
              {/* <Text style={styles.changePassword}>Thay đổi mật khẩu</Text> */}
          </View>
          </View>

          <TouchableOpacity onPress={changeUser} style={styles.groupButtonChange}>
              <Text style={styles.buttunChange}>Thay đổi</Text>
          </TouchableOpacity>
        </Modal>
        
      </Portal>

      <View style={styles.wrapContent}>
        <View style={styles.wrapImage}>
          <View>
            <Avatar.Image style={styles.image} size={110} source={require('../../assets/images/hinh-03.jpg')} />
            <FontAwesome style={styles.iconImage} name="pencil-square-o" size={24} color={COLORS.text} />
          </View>
          <Text onPress={showModal} style={styles.change}>Thay đổi thông tin</Text>
          {/* <Text style={styles.log}><Ionicons name="log-in" size={24} color="black" /></Text> */}
        </View>
      </View>
      <View style={styles.main}>
          <Text  style={styles.title}>Thông tin cá nhân</Text>
          <View style={styles.groupInput}>
               <Text style={styles.titleInput}>Họ và tên:</Text>
              <TextInput
                label="Họ và tên:"
                value={user?.name}
                editable={false}
                style={styles.contentInput}
              />
          </View>
          <View style={styles.groupInput}>
          <Text style={styles.titleInput}>Email:</Text>
              <TextInput
                label="Email:"
                value={user?.email}
                editable={false}
                style={styles.contentInput}
              />
          </View>
          <View style={styles.groupInput}>
          <Text style={styles.titleInput}>Địa chỉ:</Text>
              <TextInput
                label="Địa chỉ mặc định:"
                value={user?.address}
                editable={false}
                style={styles.contentInput}
              />
          </View>
          <View style={styles.groupInput}>
          <Text style={styles.titleInput}>Số điện thoại:</Text>
              <TextInput
                label="Số điện thoại:"
                value={user?.phone}
                editable={false}
                style={styles.contentInput}

              />
              {/* <Text style={styles.changePassword}>Thay đổi mật khẩu</Text> */}
          </View>
      </View>
      <MapView style={{width: '100%', height: 300}}
          region={{
            latitude: 10.85971392611097,
            latitudeDelta: 0.00019789235786227266,
            longitude: 106.73927636817098,
            longitudeDelta: 0.00026989728213777653,
          }}
        />
    </View>
  )
}

export default InfoScreen