import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './AddressScreenStyle'
import { TextInput } from 'react-native-paper';
import { Modal, Portal, Button,  } from 'react-native-paper';

const AddressScreen = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  
  return (
    <View style={styles.container}>
       <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text style={styles.titleModal}>Tạo địa chỉ mới</Text>

          <View sytle={styles.mainModal}>
            <View style={styles.groupInput}>
              <Text style={styles.label}>Họ và tên:</Text>
              <TextInput
                mode="outlined"
                label="Outlined input"
                placeholder="Type something"
                style={styles.input}
              />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.label}>Số điện thoại:</Text>
              <TextInput
                mode="outlined"
                label="Outlined input"
                placeholder="Type something"
                style={styles.input}
              />
            </View>
            <View style={styles.groupInput}>
              <Text style={styles.label}>Địa chỉ:</Text>
              <TextInput
                mode="outlined"
                label="Outlined input"
                placeholder="Type something"
                style={styles.input}
              />
            </View>
          </View>
      
        <View style={styles.groupButtonChange}>
              <Text style={styles.buttunChange}>Tạo mới</Text>
          </View>
        </Modal>
      </Portal>
      <Text onPress={showModal} style={styles.title}>Tạo địa chỉ mới +</Text>
      <ScrollView>

      <View style={styles.address}>
          <View style={[styles.itemAddress, styles.active]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>
          <View style={[styles.itemAddress]}>
              <Text style={styles.addressName}>Nguyễn Hồng Quân - 0938671111</Text>
              <Text style={styles.addressContent}>123 Nguyễn Duy Trinh, phường Long Trường, Quận 9</Text>
          </View>

      </View>
      </ScrollView>

    </View>
  )
}

export default AddressScreen