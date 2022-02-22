import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/slices/userSlice'
import styles from './LoginScreenStyles'

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmit = () => {
        dispatch(loginUser({email, password}))
    }
    
  return (
    <View style={styles.container}>
        <View style={styles.background}></View>
        <View style={styles.main}>
            <Text style={styles.title}>ĐĂNG NHẬP</Text>
            <View style={styles.group}>
            <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Họ và tên</Text>
                <View style={styles.wrapInput}>
                <TextInput style={styles.contentInput} max={30} min={6}  icon={false} showPass={false} onChangeText={(value) => setEmail(value)} title={"Tài khoản"} placeholder={"Tài khoản..."} />
                  
              </View>
              
              
          </View>
          <View style={styles.groupInput}>
                <Text style={styles.titleInput}>Họ và tên</Text>
                <View style={styles.wrapInput}>
                 
                <TextInput secureTextEntry={true} style={styles.contentInput} onChangeText={(value) => setPassword(value)} icon title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
              </View>
          </View>
              
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity onPress={onSubmit}><Text style={styles.button}>Đăng nhập</Text></TouchableOpacity>
            </View>
            <View style={styles.groupText}>
                <Text>
                    Bạn chưa có tài khoản ? 
                </Text>
                <TouchableOpacity onPress={() => changeScreen('RegisterScreen')}><Text style={styles.textRegister}>đăng ký</Text></TouchableOpacity>
            </View>
            <View style={styles.groupText}>
                <TouchableOpacity onPress={() => changeScreen('ResetScreen')}><Text style={styles.textRegister}>Quên mật khẩu</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginScreen