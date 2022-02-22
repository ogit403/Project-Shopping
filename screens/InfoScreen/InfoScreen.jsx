import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './InfoScreenStyle'
import { Avatar } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons'; 
import { COLORS } from '../../contains';
import { Ionicons } from '@expo/vector-icons'; 
import { TextInput } from 'react-native-paper';
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser, updateInfoUser } from '../../store/slices/userSlice';
const InfoScreen = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const user = useSelector(state => state.User.user);
  // console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoUser());
  }, [])

  const changeUser = () => {
    dispatch(updateInfoUser({
      name: 'Nguyen Hong Quan',
      phone: '0938671132',
      address: 'Ho Chi Minh'
    }))
    
  }


  return (
    <View style={styles.container}>
       <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <Text style={styles.titleModal}>Thay đổi thông tin</Text>

          <View style={styles.mainModal}>
          <TextInput
          style={styles.inputModal}
      label="Họ và tên..."
      mode="outlined"
      placeholder='Họ và tên...'
    />
      <TextInput
      style={styles.inputModal}
      label="Họ và tên..."
      mode="outlined"
      placeholder='Họ và tên...'
    />
      <TextInput
      style={styles.inputModal}
      label="Họ và tên..."
      mode="outlined"
      placeholder='Họ và tên...'
    />
          </View>

          <View style={styles.groupButtonChange}>
              <Text style={styles.buttunChange}>Thay đổi</Text>
          </View>
        </Modal>
      </Portal>

      <View style={styles.wrapContent}>
        <View style={styles.wrapImage}>
          <View>
            <Avatar.Image size={80} source={require('../../assets/images/hinh-03.jpg')} />
            <FontAwesome style={styles.iconImage} name="pencil-square-o" size={24} color={COLORS.text} />
          </View>
          <Text onPress={showModal} style={styles.change}>Thay đổi thông tin</Text>
          <Text style={styles.log}><Ionicons name="log-in" size={24} color="black" /></Text>
        </View>
      </View>
      <View style={styles.main}>
          <Text onPress={changeUser} style={styles.title}>Thông tin cá nhân</Text>
          <View style={styles.groupInput}>
              <TextInput
                label="Họ và tên:"
                value={user?.name}
                editable={false}
              />
          </View>
          <View style={styles.groupInput}>
              <TextInput
                label="Email:"
                value={user?.email}
                editable={false}
              />
          </View>
          <View style={styles.groupInput}>
              <TextInput
                label="Địa chỉ mặc định:"
                value={user?.address}
                editable={false}
              />
          </View>
          <View style={styles.groupInput}>
              <TextInput
                label="Số điện thoại:"
                value={user?.phone}
                editable={false}
              />
              {/* <Text style={styles.changePassword}>Thay đổi mật khẩu</Text> */}
          </View>
      </View>
    </View>
  )
}

export default InfoScreen