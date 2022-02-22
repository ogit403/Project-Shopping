import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles from './ForgotScreenStyles'
const ForgotScreen = () => {


  return (
    <View style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.main}>
            <Text style={styles.title}>Quên mật khẩu</Text>
            <View style={styles.group}>
             <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Họ và tên</Text>
                <View style={styles.wrapInput}>
                 
                <TextInput style={styles.contentInput} icon showPass={true} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
              </View>
          </View>
          </View>
          <View style={styles.groupButton}>
              <Text  style={styles.button}>Xác nhận</Text>
          </View>
        </View>
    </View>
  )
}

export default ForgotScreen