import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../store/slices/userSlice'
import styles from './LoginScreenStyles'
import { AntDesign } from '@expo/vector-icons'; 
import { COLORS } from '../../contains'

const LoginScreen = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(props.navigation)


    const onSubmit = () => {
        dispatch(loginUser({data: {email, password}, navigation: props.navigation}))
    }
    
  return (
    <View style={styles.container}>
        <View
        style={styles.top}>
            <AntDesign onPress={() => props.navigation.goBack()} name="left" size={24} color={COLORS.main} />
        </View>
        <View style={styles.main}>
            <View style={styles.wrapImage}>
                <Image style={styles.image} source={require('../../assets/images/bg-1.png')} />
            </View>
            <Text style={styles.title}>ĐĂNG NHẬP</Text>
            <View style={styles.group}>
            <View style={styles.groupInput}>
                {/* <Text style={styles.titleInput}>Họ và tên</Text> */}
                <View style={styles.wrapInput}>
                <TextInput style={styles.contentInput} placeholderTextColor={COLORS.input} max={30} min={6}  icon={false} showPass={false} onChangeText={(value) => setEmail(value)} title={"Tài khoản"} placeholder={"Tài khoản..."} />
                  
              </View>
              
              
          </View>
          <View style={styles.groupInput}>
                <View style={styles.wrapInput}>
                 
                <TextInput secureTextEntry={true} placeholderTextColor={COLORS.input} style={styles.contentInput} onChangeText={(value) => setPassword(value)} icon title={"Mật khẩu"} placeholder={"Mật khẩu..."} />
              </View>
          </View>
          <View style={styles.wrapForgot}>
            <Text style={styles.forgot}>Quên mật khẩu</Text>
          </View>
            </View>
            <View style={styles.groupButton}>
                <TouchableOpacity onPress={onSubmit}><Text style={styles.button}>Đăng nhập</Text></TouchableOpacity>
            </View>


            <View style={styles.groupText}>
                <Text>
                    Bạn chưa có tài khoản ? 
                </Text>
                <TouchableOpacity onPress={() => changeScreen('RegisterScreen')}><Text style={styles.textRegister}>đăng ký ngay</Text></TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginScreen