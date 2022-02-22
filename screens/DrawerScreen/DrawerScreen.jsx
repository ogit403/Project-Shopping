import React , { useEffect, useState } from 'react'
import {DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import { View, Text , Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMAGES , COLORS } from '../../contains'
import styles from './DrawerScreenStyles'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/slices/userSlice';

const DrawerContent = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [active, setActive] = useState('Home');
    const token = useSelector(state => state.User.isLogin);

    const logOutUser = () => {
        dispatch(logoutUser())
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerBox}>
                    <Image style={styles.img} source={IMAGES.avatar} />
                </View>
                <Text style={styles.headerTitle}>ZendVN NEWS</Text>
            </View>
            <DrawerContentScrollView style={styles.body} >
                <DrawerItem
                    focused={active == "Home" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-home-outline'} size={size} color={color} />
                    )}
                    label="Trang chủ"
                    onPress={() => {
                        setActive('Home')
                        navigation.navigate('Home')
                    }}
                />
                <DrawerItem
                    focused={active == "Gold" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-podium-outline'} size={size} color={color} />
                    )}
                    label="Danh mục"
                    onPress={() => {
                        setActive('Gold')
                        navigation.navigate('Gold')
                    }}
                />
                <DrawerItem
                    focused={active == "Coin" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-pulse-outline'} size={size} color={color} />
                    )}
                    label="Yêu thích"
                    onPress={() => {
                        setActive('Coin')
                        navigation.navigate('Coin')
                    }}
                />
                {
                    token ?
                    (<>
                     <DrawerItem
                    focused={active == "Setting" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-settings-outline'} size={size} color={color} />
                    )}
                    label="Đăng xuất"
                    onPress={logOutUser}
                /> 
                <DrawerItem
                    focused={active == "Setting" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-person'} size={size} color={color} />
                    )}
                    label="Thông tin cá nhân"
                    onPress={() => {
                        setActive('Setting')
                        navigation.navigate('Setting')
                    }}
                />
                    </>
                   
                )
                
                : 
                <DrawerItem
                    focused={active == "Setting" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-settings-outline'} size={size} color={color} />
                    )}
                    label="Đăng nhập"
                    onPress={() => {
                        setActive('LoginHomeScreen')
                        navigation.navigate('LoginHomeScreen')
                    }}
                />
                }
                
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Text style={styles.bottomDrawerSectionText}>@CopyRight ZendVN</Text>
            </Drawer.Section>
        </View>
    )
}

export default DrawerContent
