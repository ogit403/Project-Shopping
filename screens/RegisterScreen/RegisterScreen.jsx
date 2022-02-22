import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './RegisterScreenStyles';

const Registerscreen = () => {
    const navigation = useNavigation();

    const changeScreen = () => {
        navigation.push('LoginScreen')
    }

    const onSubmit = () => {
        register(email, password)
    }

    const handleName = (value) => {
        setEmail(value)
    }
    const handlePassword = (value) => {
        setPassword(value)
    }
    

  return (
    <View style={styles.container}>
    <View style={styles.background}></View>
    <View style={styles.main}>
        <Text style={styles.title}>ĐĂNG KÝ</Text>
        <View style={styles.group}>
          <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Họ và tên</Text>
                <View style={styles.wrapInput}>
                 
                <TextInput style={styles.contentInput} icon showPass={true} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
              </View>
          </View>
          <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Họ và tên</Text>
                <View style={styles.wrapInput}>
                 
                <TextInput style={styles.contentInput} icon showPass={true} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
              </View>
          </View>
          <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Họ và tên</Text>
                <View style={styles.wrapInput}>
                 
                <TextInput style={styles.contentInput} icon showPass={true} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
              </View>
          </View>
          <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Họ và tên</Text>
                <View style={styles.wrapInput}>
                 
                <TextInput style={styles.contentInput} icon showPass={true} title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
              </View>
          </View>
        </View>
        <View style={styles.groupButton}>
            <Text style={styles.button}>Đăng ký</Text>
        </View>
        <View style={styles.groupText}>
            <Text>
            Bạn đã có tài khoản ?
            </Text>
                <TouchableOpacity onPress={changeScreen}><Text style={styles.textRegister}>đăng nhập</Text></TouchableOpacity>
        </View>
    </View>
</View>
  )
}

export default Registerscreen