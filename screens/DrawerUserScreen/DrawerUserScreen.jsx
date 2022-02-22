import React , { useState } from 'react'
import {DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'react-native-paper';
import { View, Text , Image } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons';
import { IMAGES , COLORS } from '../../contains'
import styles from './DrawerUserScreenStyle'

const DrawerContentUser = () => {
    const navigation = useNavigation()
    const [active, setActive] = useState('Home')

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
                    label="Thông tin"
                    onPress={() => {
                        setActive('Home')
                        navigation.navigate('Home')
                    }}
                />
                <DrawerItem
                    focused={active == "Notify" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-podium-outline'} size={size} color={color} />
                    )}
                    label="Thông báo"
                    onPress={() => {
                        setActive('Notify')
                        navigation.navigate('Notify')
                    }}
                />
                <DrawerItem
                    focused={active == "Order" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-pulse-outline'} size={size} color={color} />
                    )}
                    label="Đơn hàng"
                    onPress={() => {
                        setActive('Order')
                        navigation.navigate('Order')
                    }}
                />
                 <DrawerItem
                    focused={active == "Address" ? true : false}
                    activeTintColor={COLORS.primary}
                    icon={({color, size }) => (
                        <Ionicons name={'ios-settings-outline'} size={size} color={color} />
                    )}
                    label="Địa chỉ"
                    onPress={() => {
                        setActive('Address')
                        navigation.navigate('Address')
                    }}
                />
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <Text style={styles.bottomDrawerSectionText}>@CopyRight ZendVN</Text>
            </Drawer.Section>
        </View>
    )
}

export default DrawerContentUser
