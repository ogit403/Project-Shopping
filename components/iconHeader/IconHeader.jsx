import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import styles from './IconHeaderStyles'
import { COLORS } from '../../contains'
// import { DrawerActions } from 'react-navigation';
const IconHeader = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        // console.log(navigation)
        navigation.openDrawer();
        // navigation.dispatch(DrawerActions.openDrawer());
    }

    return (
        <TouchableOpacity onPress={openDrawer} style={styles.container}>
           <Feather name="menu" size={26} color={COLORS.main} />
        </TouchableOpacity>
    )
}

export default IconHeader
