import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '../../contains';
const Width = Dimensions.get('window').width - 30;
const styles = StyleSheet.create({
    itemCategory: {
        width: Width / 4.2,
        // height: '100%',
        // height: Height / 10,
        marginHorizontal: 5,
        marginVertical: 5,
        alignItems: 'center'
    },
    wrapImage: {
        // borderWidth: 1,
        // borderColor: COLORS.main,
        // borderRadius: 10,
        width: 70,
        height: 50,
        // paddingHorizontal: 5,
        // paddingVertical: 5
    },  
    imageCategory: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    titleCategory: {
        textAlign: 'center',
        color: COLORS.text,
        fontFamily: 'Poppins',
        paddingTop: 4,
    },
})

export default styles;